import React from 'react'

import {
  AnimeDetailContainer,
  AnimeDetailContent,
  AnimeDetailTitle,
  AnimeImage3,
  CloseButton,
} from './StyledComponents'

const AnimeDetailPage = ({ anime, onClose }) => {
  return (
    <AnimeDetailContainer>
      <AnimeImage3 src={anime.images.jpg.image_url} alt={anime.title} />
      <AnimeDetailTitle>{anime.title}</AnimeDetailTitle>
      <AnimeDetailContent>
        <p>{anime.synopsis}</p>
        <p>Episodes: {anime.episodes}</p>
        <p>Rating: {anime.score}</p>
        <p>Status: {anime.status}</p>
        <p>Source: {anime.source}</p>
        <p>
          More info: <a href={anime.url}>{anime.url}</a>
        </p>
      </AnimeDetailContent>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </AnimeDetailContainer>
  )
}

export default AnimeDetailPage
