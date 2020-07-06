import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
`;
const Container = styled.div`
  display: flex;
`;

function NewItemsBanner(props) {
  if (props === null || props.itemsData.length === 0) {
    return (
      <Container>
        <Item to="">
          <span>[Loading Image]</span>
          <span>Loading Title</span>
        </Item>
      </Container>
    );
  }
  const listItems = props.itemsData.items.map((item) => (
      <Item to={`item/${item.id}`} key={item.id}>
        <span>[Image goes here]</span>
        <span>{item.name}</span>
      </Item>
  ));
  return <Container>{listItems}</Container>;
}

export default NewItemsBanner;
