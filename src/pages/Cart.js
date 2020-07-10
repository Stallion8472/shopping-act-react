import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../breakpoints.js";
import { Link } from "react-router-dom";
import Modal from "../components/Modal.js";

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(FlexColumn)`
  margin: 1em;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftColumnItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightColumnShipping = styled(FlexColumn)`
  align-items: flex-start;
  padding: .25rem 0 0 0;
  border-top-width: 2px;
  border-color: rgba(237, 242, 247, 1);

  @media ${device.tablet} {
    padding: 0;
    border-top-width: 0;
    align-items: flex-end;
  }
`;

const Title = styled.h1`
  font-size: larger;
  font-weight: 600;
  align-self: right;
`;

const ItemContents = styled(FlexColumn)`
  justify-content: space-between;
  height: 100%;
  margin: 0 0 0 1em;
`;

const ItemDetails = styled(FlexColumn)`
  height: 100%;
`;

const Item = styled.li`
  display: flex;
  margin: 0 0 1em 0;
  height: 150px;
`;

const ItemLink = styled(Link)``;

const Image = styled.img`
  width: 150px;
  object-fit: contain;
`;

const Button = styled.button`
  padding: 0.25rem 0.75rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
`;

const CheckoutButton = styled(Button)`
  background-color: #f6ad55;
  &:hover {
    background-color: #ed8936;
  }
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
        <CheckoutButton onClick={() => cartFunctions(item)}>
          Delete
        </CheckoutButton>
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
  const [modalVisible, setModalVisible] = useState(true);

  function showModal(visible){
    setModalVisible(visible)
  }

  if (props.cart.size === 0) {
    return (
      <Container>
        <Title>Your cart is empty!</Title>
      </Container>
    );
  }
  return (
    <Container>
      {modalVisible && <Modal showModal={showModal}></Modal>}
      <LeftColumnItems>
        {cartItems(props.cart, props.cartFunctions)}
      </LeftColumnItems>
      <RightColumnShipping>
        <Title>Subtotal: ${subTotal(props.cart)}</Title>
        <CheckoutButton onClick={() => setModalVisible(true)}>Checkout</CheckoutButton>
      </RightColumnShipping>
    </Container>
  );
}

export default Cart;
