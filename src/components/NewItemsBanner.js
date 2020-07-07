import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../breakpoints.js";

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: .25em;

  @media ${device.tablet}{
    width: 25%;
    height: auto;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${device.tablet}{
    flex-direction: row;
  }
`;

const Image = styled.img`
  object-fit: contain;
  max-height: 200px;
  max-width: 200px;

  @media ${device.tablet}{
    max-height: 300px;
  }
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
  const listItems = props.itemsData.items.map((item) => (
    <Item to={`item/${item.id}`} key={item.id}>
      <Image src={`/${item.url}`} alt="item img"></Image>
      <span>{item.name}</span>
    </Item>
  ));
  return <Container>{listItems}</Container>;
}

export default NewItemsBanner;
