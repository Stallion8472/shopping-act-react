import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../breakpoints.js";

const Item = styled(Link)`
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media ${device.laptopL} {
    justify-content: initial;
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

function NewItemsBanner(props) {
  if (props === null || props.itemsData.length === 0) {
    return (
      <Container>
        <Item to="">
          <span>Loading Image</span>
          <span>Loading Title</span>
        </Item>
      </Container>
    );
  }
  const listItems = props.itemsData.map((item) => (
    <Item to={`item/${item.id}`} key={item.id}>
      <Image src={`/${item.url}`} alt="item img"></Image>
      <ItemDetails>
        <span>
          {item.name} | ${item.price}
        </span>
        <AddButton
          onClick={(e) => {
            e.preventDefault();
            props.cartFunctions(item);
          }}
        >
          Add
        </AddButton>
      </ItemDetails>
    </Item>
  ));
  return <Container>{listItems}</Container>;
}

export default NewItemsBanner;
