import React, { useState } from "react";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Image from "../../assets/bubbletea.png";
import Button from "../Shared/Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  gap: 1.4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`;

const ContentContainer = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #000958;
    margin: 0.5rem 0;
  }
  p {
    font-size: 1.2rem;
    margin: 20px 0;
  }

  @media (max-width: 888px) {
    h1 {
      font-size: 2.7rem;
    }
  }
  @media (max-width: 768px) {
    text-align: center;
    h1 {
      font-size: 2.3rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const ImageContainer = styled.div`
  height: 450px;
  width: 300px;
  overflow: hidden;
  border-radius: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 300px;
    width: 100%;
    border-radius: 0px;
  }
`;

const Searchbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
  margin-top: 3rem;
  input {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 30px;
    padding: 0 1.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const Maincontent = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = () => {
    if (searchValue) {
      history.push(`/search/${searchValue}`);
    } else {
      message.info("Please enter a search term");
    }
  };

  return (
    <Container>
      <ContentContainer>
        <h1>Enjoy the tea time,</h1>
        <h1>Enjoy your life</h1>
        <p>Take a sip simply, order now!</p>
        <Searchbar>
          <input
            value={searchValue}
            type="text"
            placeholder="What are you looking for?"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button onClick={searchHandler}>Search</Button>
        </Searchbar>
      </ContentContainer>
      <ImageContainer>
        <img src={Image} alt="bubbletea" />
      </ImageContainer>
    </Container>
  );
};

export default Maincontent;
