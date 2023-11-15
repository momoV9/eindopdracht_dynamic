import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimeDetailPage from "../components/AnimeDetailPage";
import {
    AnimeContainer2,
    AnimeImage2,
    AnimeItemWrapper,
    AnimeList,
    AnimeListTitle,
    AnimeTitle, SearchContainer, SearchInput
} from "../components/StyledComponents";




const AnimeApiPage = () => {
    const [animeList, setAnimeList] = useState([]);
    const [selectedAnime, setSelectedAnime] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredAnimeList = animeList.filter((anime) =>
        anime.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AnimeContainer2>
            <AnimeListTitle>Anime List</AnimeListTitle>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </SearchContainer>
            {selectedAnime ? (
                <AnimeDetailPage anime={selectedAnime} onClose={handleCloseDetail} />
            ) : (
                <AnimeList>
                    {filteredAnimeList.map((anime) => (
                        <AnimeItemWrapper key={anime.id} onClick={() => handleAnimeClick(anime)}>
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