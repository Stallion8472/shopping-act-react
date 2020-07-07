import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 1em;
`;

const Title = styled.h1`
  font-size: larger;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

const Item = styled.li`
  display: flex;
  margin: 1em 0;
`;

const Image = styled.img`
  margin: 1em;
  width: 150px;
  object-fit: contain;
`;

const RemoveFromCartButton = styled.button`
  padding: 0.5em 1em;
  color: black;
  background-color: #b8b8b8;
  border-radius: 8px;
  width: 100px;
`;

function Cart(props) {
  if (props.cart.size === 0) {
    return (
      <Container>
        <Title>Your cart is empty!</Title>
      </Container>
    );
  }
  let cartItems = [...props.cart.keys()].map((item) => (
    <Item key={item}>
      <Image src={`/${props.cart.get(item).url}`} alt="item img"></Image>
      <ItemDetails>
        <Title>{props.cart.get(item).name}</Title>
        <span>Quantity: {props.cart.get(item).quantity}</span>
        <RemoveFromCartButton onClick={() => props.cartFunctions(item)}>Delete</RemoveFromCartButton>
      </ItemDetails>
    </Item>
  ));
  return <Container>{cartItems}</Container>;
}

export default Cart;
