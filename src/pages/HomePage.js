import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import {
    AnimeContainer,
    FilterInfo,
    GenreButtons,
    Wrapper,
    Content,
    AnimeDetailsModal,
} from "../components/StyledComponents";
import { featuredAnime } from "../data";
import 'bootstrap/dist/css/bootstrap.min.css';



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
                <Alert variant="info">
                    <strong>Welcome to the world of anime!</strong> If you're an anime enthusiast, you've
                    come to the right place. Explore a wide selection of your favorite anime series and
                    discover new adventures. Whether you're into action, adventure, or any other genre, our
                    collection has something for everyone. Start your anime journey here!
                </Alert>

                <GenreButtons>
                    <Button variant="primary" onClick={() => handleGenreFilter("Action")}>
                        Action
                    </Button>
                    <Button variant="primary" onClick={() => handleGenreFilter("Adventure")}>
                        Adventure
                    </Button>
                </GenreButtons>

                {selectedGenre && (
                    <FilterInfo>
                        <p>Filtering by: {selectedGenre}</p>
                        <Button variant="danger" onClick={clearGenreFilter}>
                            Clear Filter
                        </Button>
                    </FilterInfo>
                )}

                <div>
                    <h2>Featured Anime</h2>
                    <AnimeContainer>
                        {filteredAnime.map((anime) => (
                            <Card key={anime.id} onClick={() => openAnimeDetails(anime)}>
                                <Card.Img
                                    src={anime.image}
                                    alt={anime.title}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title>{anime.title}</Card.Title>
                                </Card.Body>
                            </Card>
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
        </Wrapper>
    );
};

export default HomePage;