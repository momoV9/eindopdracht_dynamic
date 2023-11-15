import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const AnimeContext = createContext({});

export function AnimeProvider(props) {
    const [animeList, setAnimeList] = useState([]);

    console.log({ animeList });

    const addAnime = useCallback((newAnime) =>
            setAnimeList((prevAnimeList) => [...prevAnimeList, newAnime]),
        []
    );

    const removeAnime = useCallback((animeId) =>
            setAnimeList((prevAnimeList) =>
                prevAnimeList.filter((anime) => anime.id !== animeId)
            ),
        []
    );

    const clearAnimeList = useCallback(() => setAnimeList([]), []);

    const api = useMemo(
        () => ({
            animeList,
            addAnime,
            removeAnime,
            clearAnimeList,
        }),
        [animeList, addAnime, removeAnime, clearAnimeList]
    );

    return (
        <AnimeContext.Provider value={api}>{props.children}</AnimeContext.Provider>
    );
}

export const useAnimeContext = () => useContext(AnimeContext);
