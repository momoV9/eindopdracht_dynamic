import React from "react";

import styled from "styled-components";

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

function HomePage() {



    return (
        <div>
            <h1>Welcome to My Website</h1>
            <p>This is the homepage of my website. You can add your content and components here.</p>



            <Button onClick={() => alert('You can learn more about my website here!')}>Learn More</Button>
        </div>
    );
}

export default HomePage;
