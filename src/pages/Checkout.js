import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../breakpoints.js";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  margin: 1em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1em;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 100%;
  @media ${device.tablet} {
    margin: 1rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: larger;
  font-weight: 600;
`;

const BasicLabel = styled.label`
  line-height: 2;
`;

const BasicInput = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  background-color: #e2e8f0;
  flex-grow: 1;

  &:focus {
    background-color: white;
  }
`;

const BasicSelect = styled.select`
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  border-radius: 8px;
  background-color: #e2e8f0;

  &:focus {
    background-color: white;
  }
`;

const Button = styled.button`
  margin: 1em 0 0 0;
  padding: 0.5em 1em;
  color: black;
  border-radius: 8px;
  background-color: #f6ad55;
  &:hover {
    background-color: #ed8936;
  }
`;

async function submitCart(cart, clearCart, name, address) {
  let response = await axios.post(`/api/submitOrder`, {
    Cart: cart,
    Name: name,
    Address: address,
  });
  if (response.status === 201) {
    clearCart();
  }
}

function Checkout(props) {
  const [name, setName] = useState({ first: "", last: "" });
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  return (
    <Container>
      <Title>Checkout</Title>
      <Content>
        <SectionContent>
          <ItemGroup>
            <BasicLabel>First Name</BasicLabel>
            <BasicInput
              type="text"
              value={name.first}
              onChange={(e) =>
                setName(Object.assign({}, name, { first: e.target.value }))
              }
            ></BasicInput>
          </ItemGroup>
          <ItemGroup>
            <BasicLabel>Last Name</BasicLabel>
            <BasicInput
              type="text"
              value={name.last}
              onChange={(e) =>
                setName(Object.assign({}, name, { last: e.target.value }))
              }
            ></BasicInput>
          </ItemGroup>
        </SectionContent>
        <SectionContent>
          <ItemGroup>
            <BasicLabel>Street</BasicLabel>
            <BasicInput
              type="text"
              value={address.street}
              onChange={(e) =>
                setAddress(
                  Object.assign({}, address, { street: e.target.value })
                )
              }
            ></BasicInput>
          </ItemGroup>
          <ItemGroup>
            <BasicLabel>City</BasicLabel>
            <BasicInput
              type="text"
              value={address.city}
              onChange={(e) =>
                setAddress(Object.assign({}, address, { city: e.target.value }))
              }
            ></BasicInput>
          </ItemGroup>
        </SectionContent>
        <SectionContent>
          <ItemGroup>
            <BasicLabel>State</BasicLabel>
            <BasicSelect
              value={address.state}
              onChange={(e) =>
                setAddress(
                  Object.assign({}, address, { state: e.target.value })
                )
              }
            >
              <option value="KS">Kansas</option>
              <option value="OH">Ohio</option>
              <option value="KY">Kentucky</option>
              <option value="NY">New York</option>
            </BasicSelect>
          </ItemGroup>
          <ItemGroup>
            <BasicLabel>Zip</BasicLabel>
            <BasicInput
              type="text"
              value={address.zip}
              onChange={(e) =>
                setAddress(Object.assign({}, address, { zip: e.target.value }))
              }
            ></BasicInput>
          </ItemGroup>
        </SectionContent>
      </Content>
      <Button
        onClick={() => submitCart(props.cart, props.clearCart, name, address)}
      >
        Submit
      </Button>
    </Container>
  );
}

export default Checkout;
