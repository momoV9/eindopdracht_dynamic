import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import {firestoreDB} from "../services/firebase";


export function AnimePage() {
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
            console.error('Fout bij het ophalen van animegegevens:', error);
        }
    }

    useEffect(() => {

        (async () => {
            await getAnimeData();
        })();
    }, []);

    return (
        <div>
            <h1>Anime Database</h1>
            <div>
                {animeData.map((anime) => (
                    <div key={anime.title}>
                        <h2>{anime.title}</h2>
                        <p>{anime.description}</p>
                        <p>Genre: {anime.genre}</p>
                        <p>Release Date: {anime.releaseDate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}