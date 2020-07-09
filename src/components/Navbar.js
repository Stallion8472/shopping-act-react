import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  background-color: white;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  box-shadow:0 5px 20px -10px #000;
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
`;

const Nav = styled(Link)`
  padding: 1em 1.5em 1em 1.5em;
  &:hover {
    background-color: #b8b8b8;
  }
`;

function itemsInCart(cart) {
  let itemCount = 0;
  for (let [k, v] of cart) {
    itemCount += cart[k] = v.quantity;
  }
  return itemCount;
}

function Navbar(props) {
  return (
    <Container>
      <Links>
        <Nav to="/" className="link">
          FT
        </Nav>
        <Nav to="/items" className="link">
          All Items
        </Nav>
      </Links>
      <Links className="links">
        <Nav to="/cart" className="link">
          <Cart>
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              className="bi bi-cart3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: "0 .5em 0 0" }}
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
            <span>{itemsInCart(props.cart)}</span>
          </Cart>
        </Nav>
      </Links>
    </Container>
  );
}

export default Navbar;
