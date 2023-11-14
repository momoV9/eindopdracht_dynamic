import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; Anime World</p>
            <p>Contact: info@animeworld.com</p>
            <p>Follow us on social media: @AnimeWorld</p>
        </FooterContainer>
    );
};

export default Footer;