import React from "react";
import styled from "styled-components";
import { device } from "../breakpoints.js";
import { Link } from "react-router-dom";

const ItemBody = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 200px;
  margin: 0.5rem auto;
  background-color: white;

  @media ${device.mobileL} {
    margin: 0.5rem 0.25rem 0.5rem 0;
  }

  @media ${device.laptop} {
    width: 250px;
  }
`;
const Image = styled.img`
  object-fit: cover;
`;

const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0;
`;

const AddButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  background-color: #ed8936;
`;

function Item(props) {
  return (
    <ItemBody to={`item/${props.item.id}`} key={props.item.id}>
      <Image src={`/${props.item.url}`} alt="item img"></Image>
      <ItemDetails>
        <span>
          {props.item.name} | ${props.item.price}
        </span>
        <AddButton
          onClick={(e) => {
            e.preventDefault();
            props.cartFunctions(props.item);
          }}
        >
          Add
        </AddButton>
      </ItemDetails>
    </ItemBody>
  );
}

export default Item;
