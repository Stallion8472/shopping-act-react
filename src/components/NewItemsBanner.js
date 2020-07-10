import React from "react";
import styled from "styled-components";
import { device } from "../breakpoints.js";
import Item from "../components/Item.js"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media ${device.laptopL} {
    justify-content: initial;
  }
`;

function NewItemsBanner(props) {
  if (props === null || props.itemsData.length === 0) {
    return (
      <Container>
          <span>Loading Items...</span>
      </Container>
    );
  }
  const listItems = props.itemsData.map((item) => (
    <Item item={item} cartFunctions={props.cartFunctions} key={item.id}>
    </Item>
  ));
  return <Container>{listItems}</Container>;
}

export default NewItemsBanner;
