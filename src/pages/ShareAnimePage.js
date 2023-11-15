import React, { useState } from 'react';
import { useAnimeContext } from '../contexts/AnimeContext';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Input } from '../components/StyledComponents';
import { useImageUploadContext } from '../contexts/ImageUploadContext';

const ShareAnimePageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const TitleContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 48%;
`;

const ImageContainer = styled.div`
  width: 48%;
`;

const ImageUploadInput = styled.input`
  margin-top: 10px;
`;

const ActionButton = styled(Button)`
  margin-top: 10px;
`;



const AnimeListItem = styled.li`
  margin-bottom: 8px;
`;

const ShareAnimePage = () => {
    const { animeList, addAnime, removeAnime } = useAnimeContext();
    const { image, uploadImage, clearImage } = useImageUploadContext();
    const [newAnime, setNewAnime] = useState('');

    const handleAddAnime = () => {
        if (newAnime.trim() !== '') {
            addAnime({ id: Date.now(), title: newAnime, image });
            setNewAnime('');
        }
    };

    const handleRemoveAnime = (animeId) => {
        removeAnime(animeId);
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                uploadImage(reader.result);
            };
            reader.readAsDataURL(selectedImage);
        }
    };

    const handleClearImage = () => {
        clearImage();
    };

    return (
        <ShareAnimePageContainer>
            <TitleContainer>
                <Title>Share Anime Page</Title>
            </TitleContainer>

            <ContentContainer>
                <FormContainer>
                    <Title>Share your favorite anime</Title>
                    <Input
                        type="text"
                        placeholder="Enter new anime"
                        value={newAnime}
                        onChange={(e) => setNewAnime(e.target.value)}
                    />

                    <ActionButton variant="primary" onClick={handleAddAnime}>
                        Add Anime
                    </ActionButton>


                    {animeList.map((anime) => (
                        <AnimeListItem key={anime.id}>
                            {anime.title}{' '}
                            <ActionButton variant="danger" onClick={() => handleRemoveAnime(anime.id)}>
                                Remove
                            </ActionButton>
                        </AnimeListItem>
                    ))}
                </FormContainer>

                <ImageContainer>
                    <Title>Share an anime picture</Title>
                    <ImageUploadInput type="file" onChange={handleImageChange} />
                    {image && (
                        <div>

                            <img
                                src={image}
                                alt="Uploaded Anime"
                                style={{ maxWidth: '100%', maxHeight: '200px', margin: '10px 0' }}
                            />
                            <ActionButton variant="secondary" onClick={handleClearImage}>
                                Remove Image
                            </ActionButton>
                        </div>
                    )}
                </ImageContainer>
            </ContentContainer>
        </ShareAnimePageContainer>
    );
};

export default ShareAnimePage;