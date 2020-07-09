import React from "react";
import styled from "styled-components";
import { device } from "../breakpoints.js";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftColumnItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightColumnShipping = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    align-items: flex-end;
  }
`;

const Title = styled.h1`
  font-size: larger;
  align-self: right;
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

const Item = styled.li`
  display: flex;
  margin: 1em 0;
  height: 150px;
`;

const ItemLink = styled(Link)``;

const Image = styled.img`
  width: 150px;
  object-fit: contain;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  color: black;
  background-color: #b8b8b8;
  border-radius: 8px;
  width: 100px;
`;

function cartItems(cart, cartFunctions) {
  return [...cart.keys()].map((item) => (
    <Item key={item}>
      <Image src={`/${cart.get(item).url}`} alt="item img"></Image>
      <ItemContents>
        <ItemDetails>
          <Title>
            <ItemLink to={`item/${cart.get(item).id}`}>
              {cart.get(item).name}
            </ItemLink>
          </Title>
          <span>Quantity: {cart.get(item).quantity}</span>
          <span>Price: ${cart.get(item).price}</span>
        </ItemDetails>
        <Button onClick={() => cartFunctions(item)}>Delete</Button>
      </ItemContents>
    </Item>
  ));
}

function subTotal(cart) {
  let total = 0;
  for (let [, v] of cart) {
    total += v.quantity * v.price;
  }
  return total;
}

function Cart(props) {
  if (props.cart.size === 0) {
    return (
      <Container>
        <Title>Your cart is empty!</Title>
      </Container>
    );
  }
  return (
    <Container>
      <LeftColumnItems>
        <ul>{cartItems(props.cart, props.cartFunctions)}</ul>
      </LeftColumnItems>
      <RightColumnShipping>
        <Title>Subtotal: ${subTotal(props.cart)}</Title>
        <Button onClick={null}>Checkout</Button>
      </RightColumnShipping>
    </Container>
  );
}

export default Cart;
