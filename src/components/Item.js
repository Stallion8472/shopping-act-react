import React from "react";
import styled from "styled-components";
import { device } from "../breakpoints.js";

const Container = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin: 1em;
`;

const Image = styled.img`
  object-fit: contain;
  max-height: 200px;
  max-width: 200px;

  @media ${device.tablet}{
    max-height: 300px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

const AddToCartButton = styled.button`
  padding: 0.5em 1em;
  color: black;
  background-color: #b8b8b8;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: large;
`;

function Item(props) {
  return (
    <Container>
      <Image src={`/${props.itemData.item.url}`} alt="item img"></Image>
      <Content>
        <Title>{props.itemData.item.name}</Title>
        <span>Rating: *****</span>
        <AddToCartButton onClick={() => props.cart(props.itemData.item)}>
          Add to Cart
        </AddToCartButton>
      </Content>
    </Container>
  );
}

export default Item;
