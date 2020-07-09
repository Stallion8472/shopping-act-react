import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 1rem;
`;

function ItemContainer(props) {
  let { id } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/api/items/").then((res) => {
      setItems(res.data.items);
    });
  }, [id]);

  if (items.length === 0) {
    return <Container>Loading Items...</Container>;
  }

  const allItems = items.map((item) => (
    <Item key={item.id} item={item} cartFunctions={props.cartFunctions}></Item>
  ));

  return <Container>{allItems}</Container>;
}

export default ItemContainer;
