import React, { useState } from "react";
import {
    AnimeCard,
    AnimeContainer,
    AnimeImage,
    ClearFilterButton,
    FilterInfo,
    GenreButton,
    GenreButtons,
    Wrapper,
    Footer,
    Content,
    AnimeDetailsModal,
} from "../components/StyledComponents";
import { featuredAnime } from "../data";

const HomePage = () => {
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedAnime, setSelectedAnime] = useState(null);

    const handleGenreFilter = (genre) => {
        setSelectedGenre(genre);
        console.log(`Filtering by genre: ${genre}`);
    };

    const clearGenreFilter = () => {
        setSelectedGenre(null);
        console.log("Filter cleared");
    };

    const filteredAnime = selectedGenre
        ? featuredAnime.filter((anime) => anime.genre === selectedGenre)
        : featuredAnime;

    const openAnimeDetails = (anime) => {
        setSelectedAnime(anime);
    };

    const closeAnimeDetails = () => {
        setSelectedAnime(null);
    };

    return (
        <Wrapper>
            <Content>
                <div>
                    <p>
                        <strong>Welcome to the world of anime!</strong>
                    </p>
                    <p>
                        If you're an anime enthusiast, you've come to the right place. Explore a wide
                        selection of your favorite anime series and discover new adventures.
                    </p>
                    <p>
                        Whether you're into action, adventure, or any other genre, our collection has
                        something for everyone. Start your anime journey here!
                    </p>
                </div>

                <GenreButtons>
                    <GenreButton onClick={() => handleGenreFilter("Action")}>Action</GenreButton>
                    <GenreButton onClick={() => handleGenreFilter("Adventure")}>Adventure</GenreButton>

                </GenreButtons>

                {selectedGenre && (
                    <FilterInfo>
                        <p>Filtering by: {selectedGenre}</p>
                        <ClearFilterButton onClick={clearGenreFilter}>Clear Filter</ClearFilterButton>
                    </FilterInfo>
                )}

                <div>
                    <h2>Featured Anime</h2>
                    <AnimeContainer>
                        {filteredAnime.map((anime) => (
                            <AnimeCard key={anime.id} onClick={() => openAnimeDetails(anime)}>
                                <AnimeImage src={anime.image} alt={anime.title} />
                                <p>{anime.title}</p>
                            </AnimeCard>
                        ))}
                    </AnimeContainer>
                </div>

                {selectedAnime && (
                    <AnimeDetailsModal>
                        <div className="modal-content">
              <span className="close" onClick={closeAnimeDetails}>
                &times;
              </span>
                            <h2>{selectedAnime.title}</h2>
                            <p>
                                <strong>Description:</strong> {selectedAnime.description}
                            </p>
                            <p>
                                <strong>Release Date:</strong> {selectedAnime.releaseDate}
                            </p>
                            <p>
                                <strong>Episodes:</strong> {selectedAnime.episodes}
                            </p>
                        </div>
                    </AnimeDetailsModal>
                )}
            </Content>
            <Footer>
                <p>&copy; Anime World</p>
                <p>Contact: info@animeworld.com</p>
                <p>Follow us on social media: @AnimeWorld</p>
            </Footer>
        </Wrapper>
    );
};

export default HomePage;
