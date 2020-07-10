import React from "react";
import styled from "styled-components";
import { device } from "../breakpoints.js";
import { Link } from "react-router-dom";

const ItemBody = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow: hidden;
  border-width: 1px;
  width: 250px;
  margin: 0.5rem auto;
  background-color: white;

  @media ${device.mobileL} {
    margin: 0.5rem 0.25rem 0.5rem 0;
  }

  @media ${device.laptop} {
    width: 250px;
  }
  &:focus {
    outline: none;
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

const ItemName = styled.span`
  font-weight: 600;
  font-size: large;
`;

const AddButton = styled.button`
  padding: 0.25rem 0.75rem;
  border-radius: 5px;
  background-color: #f6ad55;
  &:hover {
    background-color: #ed8936;
  }
`;

function Item(props) {
  return (
    <ItemBody to={`item/${props.item.id}`} key={props.item.id}>
      <Image src={`/${props.item.url}`} alt="item img"></Image>
      <ItemDetails>
        <div>
          <ItemName>{props.item.name}</ItemName>
          <span> ${props.item.price}</span>
        </div>
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
