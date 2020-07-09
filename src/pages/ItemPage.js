import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

const Title = styled.h1`
  font-size: larger;
`;

const ItemContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 0 0 0 1em;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Item = styled.div`
  display: flex;
  margin: 1em 0;
  height: 200px;
`;

const Image = styled.img`
  width: 200px;
  object-fit: contain;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  color: black;
  background-color: #b8b8b8;
  border-radius: 8px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

function ItemContainer(props) {
  let { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`/api/items/${id}`).then((res) => {
      setItem(res.data.item);
    });
  }, [id]);

  if (item === null) {
    return <Container>Loading Item...</Container>;
  }

  return (
    <Container>
      <Item key={item}>
        <Image src={`/${item.url}`} alt="item img"></Image>
        <ItemContents>
          <ItemDetails>
            <Title>{item.name}</Title>
            <span>Price: ${item.price}</span>
          </ItemDetails>
          <Button onClick={() => props.cartFunctions(item)}>Add to Cart</Button>
        </ItemContents>
      </Item>
      <Description>
        <Title>Description</Title>
        <p>{item.description}</p>
      </Description>
    </Container>
  );
}

export default ItemContainer;
