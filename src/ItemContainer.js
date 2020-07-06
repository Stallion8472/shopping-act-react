import React, { useState, useEffect } from "react";
import Item from "./Item";
import axios from "axios";
import { useParams } from "react-router-dom";

function ItemContainer() {
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

  return <Item itemData={item}></Item>;
}

export default ItemContainer;
