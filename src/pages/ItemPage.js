import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: larger;
  font-weight: 600;
`;

const Item = styled.div`
  display: flex;
  margin: 1em 0;
  height: 200px;
`;

const Image = styled.img`
  width: 200px;
  object-fit: contain;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  color: black;
  border-radius: 8px;
  background-color: #F6AD55;
  &:hover{
    background-color: #ED8936;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(FlexColumn)`
  margin: 1em;
`;

const ItemContents = styled(FlexColumn)`
  justify-content: space-between;
  height: 100%;
  margin: 0 0 0 1em;
`;

const QuantityLabel = styled.label`
  line-height: 2;
`;

const QuantityInput = styled.input`
  padding: .5rem;
  border-radius: 8px;
  background-color: #E2E8F0;
`;

function getQuantityInputValue(value){
  if(isNaN(parseInt(value))){
    return 1
  }
  return parseInt(value)
}

function ItemContainer(props) {
  let { id } = useParams();

  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`/api/items/${id}`).then((res) => {
      setItem(res.data.item);
    });
  }, [id]);

  if (item === null) {
    return <Container>Loading Item...</Container>;
  }

  return (
    <Container>
      <Item key={item}>
        <Image src={`/${item.url}`} alt="item img"></Image>
        <ItemContents>
          <FlexColumn>
            <Title>{item.name}</Title>
            <span>Price: ${item.price}</span>
          </FlexColumn>
          <FlexColumn>
            <QuantityLabel htmlFor="quantity">Quantity</QuantityLabel>
            <QuantityInput type="number" min="1" id="quantity" value={quantity} onChange={(e) => setQuantity(getQuantityInputValue(e.target.value))}></QuantityInput>
          </FlexColumn>
          <Button onClick={() => props.cartFunctions(item, quantity)}>Add to Cart</Button>
        </ItemContents>
      </Item>
      <FlexColumn>
        <Title>Description</Title>
        <p>{item.description}</p>
      </FlexColumn>
    </Container>
  );
}

export default ItemContainer;
