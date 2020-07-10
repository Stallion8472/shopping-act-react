import React, { useState, useEffect } from "react";
import NewItemsBanner from "../components/NewItemsBanner.js";
import styled from "styled-components";
import axios from "axios";
import { device } from "../breakpoints.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NewItemText = styled.h2`
  font-size: x-large;
  font-weight: 600;
  width: 100%;
  text-align: center;

  @media ${device.tablet} {
    text-align: initial;
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0.5rem;

  @media ${device.tablet} {
    padding: 0.5rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: xx-large;
  text-align: center;
  margin: 10rem 0;
`;

function Home(props) {
  const [items, setItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    axios.get(`/api/newItems`).then((res) => {
      setItems(res.data.items);
    });
  }, []);

  useEffect(() => {
    axios.get(`/api/favItems`).then((res) => {
      setFavoriteItems(res.data.items);
    });
  }, []);

  return (
    <Container>
      <Title>Welcome to Favorite Things!</Title>
      <BannerContainer>
        <NewItemText>New Items this Year</NewItemText>
        <NewItemsBanner
          itemsData={items}
          cartFunctions={props.cartFunctions}
        ></NewItemsBanner>
      </BannerContainer>
      <BannerContainer>
        <NewItemText>Favorite Items of Last Year</NewItemText>
        <NewItemsBanner
          itemsData={favoriteItems}
          cartFunctions={props.cartFunctions}
        ></NewItemsBanner>
      </BannerContainer>
    </Container>
  );
}

export default Home;
