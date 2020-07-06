import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import NewItemsBanner from "./NewItemsBanner.js";
import styled, { keyframes } from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  font-size: calc(10px + 2vmin);
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }`;

const Logo = styled.img`
  height: 40vmin;
  animation: ${rotate} infinite 20s linear;
  pointer-events: none;
`;

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/newItems`)
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  return (
    <Container>
      <p>Let's Shop!!!</p>
      <Logo src={logo} className="App-logo" alt="logo" />
      <h2>New items this year</h2>
      <NewItemsBanner itemsData={items}></NewItemsBanner>
    </Container>
  );
}

export default Home;
