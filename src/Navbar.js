import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  text-align: center;
  background-color: #adb0b4a1;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
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

function Navbar(props) {
  return (
    <Container>
      <Logo>
        <Nav to="/" className="link">
          Let's Shop
        </Nav>
      </Logo>
      <Links className="links">
        <Nav to="/cart" className="link">
          Cart
        </Nav>
        <Nav to="/settings" className="link">
          {props.user.FirstName}
        </Nav>
      </Links>
    </Container>
  );
}

export default Navbar;
