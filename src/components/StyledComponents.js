import styled from "styled-components";


export const TabList = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #007bff;
  padding: 10px;
  color: white;


`;
export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

export const AnimeContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
   justify-content: center;
`;

export const AnimeCard = styled.div`
  margin-right: 20px;
`;

export const AnimeImage = styled.img`
  width: 300px;
  height: 150px;
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;


export const GenreButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const GenreButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
`;

export const FilterInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const ClearFilterButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;
export const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

export const AnimeDetailsModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;