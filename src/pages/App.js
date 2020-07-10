import React, { useState, useEffect } from "react";
import Home from "../pages/Home.js";
import Navbar from "../components/Navbar.js";
import Cart from "../pages/Cart.js";
import Items from "../pages/Items.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import ItemPage from "../pages/ItemPage.js";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #1a202c;
`;

const CurrentPage = styled.div`
  margin: 55px 0 0 0;
`;

function updateLocalStorage(map) {
  const obj = {};
  for (let [k, v] of map) {
    obj[k] = v;
  }
  const json = JSON.stringify(obj);
  localStorage.setItem("ftCart", json);
}

function mapFromObject(object) {
  const keys = Object.keys(object)
  keys.forEach(key => {
    if(object[key].quantity < 1 || object[key].price < 1){
      delete object[key]
    }
  });
  return new Map(Object.entries(object));
}

function App() {
  let oldCart = localStorage.getItem("ftCart");
  oldCart = mapFromObject(JSON.parse(oldCart) ?? {});
  const [cart, setCart] = useState(oldCart || new Map());

  useEffect(() => {
    updateLocalStorage(cart);
  }, [cart]);

  function addItemToCart(item, amount = 1) {
    let prevValue = cart.get(item.id);
    if (!prevValue) {
      setCart(
        new Map(cart.set(item.id, Object.assign({}, item, { quantity: amount })))
      );
    } else {
      prevValue.quantity += amount;
      setCart(new Map(cart.set(item.id, prevValue)));
    }
  }

  function removeItemFromCart(key) {
    const inCart = cart.has(key);
    if (inCart) {
      cart.delete(key);
      const newCart = new Map(cart);
      setCart(newCart);
    }
  }

  return (
    <Container>
      <Router>
        <Navbar cart={cart}></Navbar>
        <CurrentPage>
          <Switch>
            <Route exact path="/">
              <Home cartFunctions={addItemToCart} />
            </Route>
            <Route exact path="/items">
              <Items cartFunctions={addItemToCart} />
            </Route>
            <Route path="/item/:id">
              <ItemPage cartFunctions={addItemToCart} />
            </Route>
            <Route path="/cart">
              <Cart cart={cart} cartFunctions={removeItemFromCart} />
            </Route>
          </Switch>
        </CurrentPage>
      </Router>
    </Container>
  );
}

export default App;
