import styled from "styled-components";


//app

export const AppContainer = styled.div`
  background-color: #f5f5f5;
`;


export const TabList = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #007bff;
  padding: 10px;
  color: white;


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



//ShopPage



export const ShopContainer = styled.div`
  padding: 20px;
   width: 90vw;
  height: 100vh;
  
`;

export const ShopHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const ProductGrid = styled.div`
  display: grid;

  gap: 20px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

export const ProductName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }`;


export const Cart = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

export const CartItem = styled.li`
  list-style: none;
  margin: 5px 0;
`;

export const  Total = styled.p`
  font-weight: bold;
  margin-top: 10px;
  text-align: right;
`;

export const  CartContainer = styled.div`
  width: 30%;
    max-height: 400px; 
  overflow-y: auto;
`;


export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;


//contactForm

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Textarea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


//contactPage

export const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  height: 100vh;
`;

export const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AdditionalText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

//animeApiPage

export const AnimeContainer2 = styled.div`
  max-width: 100%;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`;

export const AnimeListTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AnimeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;



export const AnimeImage2 = styled.img`
  max-width: 100%;
  height: auto;
  border-bottom: 2px solid #333;
  border-radius: 8px;
`;

export const AnimeTitle = styled.h3`
  font-size: 18px;
  margin: 10px;
`;

export const AnimeItemWrapper = styled.div`
  flex: 0 0 19%;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 2px solid #333;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer; 
  @media (max-width: 768px) {
    flex: 0 0 48%;
  }
`;

//AnimeDetailPage

export const AnimeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5; 
  padding: 40px;
  box-sizing: border-box;
  text-align: center;
`;

export const AnimeImage3 = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const AnimeDetailTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
`;

export const AnimeDetailContent = styled.div`
  text-align: left;
  line-height: 1.6;
  color: #555;
  max-width: 800px; 
  margin: 0 auto;
  margin-bottom: 20px;

  p {
    margin-bottom: 15px;
  }

  a {
    color: #007bff; 
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CloseButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 12px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;




