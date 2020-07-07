import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import axios from "axios";
import { useParams } from "react-router-dom";

function ItemContainer(props) {
  let { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/items/${id}`)
      .then((res) => {
        setItem(res.data);
      });
  }, [id]);

  if (item === null) {
    return "Loading Item...";
  }

  return <Item itemData={item} cart={props.cart}></Item>;
}

export default ItemContainer;
