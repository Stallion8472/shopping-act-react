import React from "react";

function Item(props) {
  return (
    <div className="Item">
      <header className="App-header">
        <h1>{props.itemData.item.name}</h1>
        <button>Add to Cart</button>
      </header>
    </div>
  );
}

export default Item;
