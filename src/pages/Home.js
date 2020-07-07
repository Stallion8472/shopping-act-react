import React, { useState, useEffect } from "react";
import NewItemsBanner from "../components/NewItemsBanner.js";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  font-size: calc(10px + 2vmin);
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchBox = styled.input`
  color: black;
  padding: 0 0.25em;
  margin: 1em;
  border-radius: 5px;
`;

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`/api/newItems`).then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <Container>
      <SearchBox type="search" placeholder="Search"></SearchBox>
      <h2>New items this year</h2>
      <NewItemsBanner itemsData={items}></NewItemsBanner>
    </Container>
  );
}

export default Home;
