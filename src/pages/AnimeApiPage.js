import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimeDetailPage from "../components/AnimeDetailPage";
import {
    AnimeContainer2,
    AnimeImage2,
    AnimeItemWrapper,
    AnimeList,
    AnimeListTitle,
    AnimeTitle
} from "../components/StyledComponents";




const AnimeApiPage = () => {
    const [animeList, setAnimeList] = useState([]);
    const [selectedAnime, setSelectedAnime] = useState(null);

    useEffect(() => {
        axios
            .get('https://api.jikan.moe/v4/anime')
            .then((response) => {
                setAnimeList(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleAnimeClick = (anime) => {
        setSelectedAnime(anime);
    };

    const handleCloseDetail = () => {
        setSelectedAnime(null);
    };

    return (
        <AnimeContainer2>
            <AnimeListTitle>Anime List</AnimeListTitle>
            {selectedAnime ? (
                <AnimeDetailPage anime={selectedAnime} onClose={handleCloseDetail} />
            ) : (
                <AnimeList>
                    {animeList.map((anime) => (
                        <AnimeItemWrapper key={anime.mal_id} onClick={() => handleAnimeClick(anime)}>
                            <AnimeImage2 src={anime.images.jpg.image_url} alt={anime.title} />
                            <AnimeTitle>{anime.title}</AnimeTitle>
                        </AnimeItemWrapper>
                    ))}
                </AnimeList>
            )}
        </AnimeContainer2>
    );
};

export default AnimeApiPage;