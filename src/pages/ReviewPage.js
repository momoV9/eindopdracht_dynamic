import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { firestoreDB } from "../services/firebase";
import styled from 'styled-components';
import FeedbackForm from "../components/FeedbackForm";



const AnimePageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`;

const AnimeTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const AnimeDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const AnimeGenre = styled.p`
  font-size: 14px;
  color: #777;
`;

const AnimeReleaseDate = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
`;

export function ReviewPage() {
    const [animeData, setAnimeData] = useState([]);

    async function getAnimeData() {
        const animeCollectionRef = collection(firestoreDB, 'anime');

        try {
            const querySnapshot = await getDocs(animeCollectionRef);
            const animeDataArray = [];

            querySnapshot.forEach((doc) => {
                const animeData = doc.data();
                animeDataArray.push(animeData);
            });

            setAnimeData(animeDataArray);
        } catch (error) {
            console.error('Error fetching anime data:', error);
        }
    }

    useEffect(() => {
        (async () => {
            await getAnimeData();
        })();
    }, []);

    return (
        <AnimePageContainer>
            <h1>Anime Database</h1>
            <div>
                {animeData.map((anime) => (
                    <div key={anime.title}>
                        <AnimeTitle>{anime.title}</AnimeTitle>
                        <AnimeDescription>{anime.description}</AnimeDescription>
                        <AnimeGenre>Genre: {anime.genre}</AnimeGenre>
                        <AnimeReleaseDate>Release Date: {anime.releaseDate}</AnimeReleaseDate>

                        <h3>Reviews</h3>

                        <FeedbackForm animeId={anime.title} />
                    </div>
                ))}
            </div>
        </AnimePageContainer>
    );
}