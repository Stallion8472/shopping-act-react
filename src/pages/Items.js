import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import axios from "axios";
import styled from "styled-components";
import Pagination from "../components/Pagination";

const Container = styled.div`
  margin: 1rem;
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function ItemContainer(props) {
  const [items, setItems] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [isLoading, setLoadingState] = useState(true);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    axios.get(`/api/items?page=${currPage}`).then((res) => {
      setItems(res.data.items);
      setMaxPage(res.data.totalItems)
      setLoadingState(false)
    });
  }, [currPage]);

  function changePage(number) {
    setLoadingState(true)
    setCurrPage(number);
  }

  if (isLoading) {
    return <Container>Loading Items...</Container>;
  }

  if (!isLoading && items.length === 0){
    changePage(1)
  }

  const allItems = items.map((item) => (
    <Item key={item.id} item={item} cartFunctions={props.cartFunctions}></Item>
  ));

  return (
    <Container>
      <Body>{allItems}</Body>
      <Pagination currPage={currPage} changePage={changePage} maxPage={maxPage}></Pagination>
    </Container>
  );
}

export default ItemContainer;
