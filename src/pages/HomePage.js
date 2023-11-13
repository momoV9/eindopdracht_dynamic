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
    Footer, Content,
} from "../components/StyledComponents";
import { featuredAnime } from "../data";

const HomePage = () => {
    const [selectedGenre, setSelectedGenre] = useState(null);

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



            <div>
                <h2>Featured Anime</h2>
                <AnimeContainer>
                    {filteredAnime.map((anime) => (
                        <AnimeCard key={anime.id}>
                            <AnimeImage src={anime.image} alt={anime.title} />
                            <p>{anime.title}</p>
                        </AnimeCard>
                    ))}
                </AnimeContainer>
            </div>

                <GenreButtons>
                <GenreButton onClick={() => handleGenreFilter("action")}>Action</GenreButton>
                <GenreButton onClick={() => handleGenreFilter("adventure")}>Adventure</GenreButton>
            </GenreButtons>

                {selectedGenre && (
                    <FilterInfo>
                        <p>Filtering by: {selectedGenre}</p>
                        <ClearFilterButton onClick={clearGenreFilter}>Clear Filter</ClearFilterButton>
                    </FilterInfo>
                )}
            </Content>
            <Footer>
                <p>&copy;Anime World</p>
                <p>Contact: info@animeworld.com</p>
                <p>Follow us on social media: @AnimeWorld</p>
            </Footer>
        </Wrapper>
    );
};

export default HomePage;
