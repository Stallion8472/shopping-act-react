import React, { useState } from "react";
import Home from "../pages/Home.js";
import Settings from "../pages/Settings.js";
import Navbar from "../components/Navbar.js";
import Cart from "../pages/Cart.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import ItemContainer from "../pages/ItemContainer.js";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #282c34;
`;

function App() {

  const [cart, setCart] = useState(new Map())

  function addItemToCart(item){
    let prevValue = cart.get(item.id)
    if(!prevValue){
      setCart(new Map(cart.set(item.id, Object.assign({}, item, {quantity: 1}))))
    }
    else{
      prevValue.quantity += 1;
      setCart(new Map(cart.set(item.id, prevValue)))
    }
  }

  function removeItemFromCart(key){
    const inCart = cart.has(key)
    if(inCart){
      cart.delete(key)
      const newCart = new Map(cart)
      setCart(newCart)
    }
  }

  const user = {
    FirstName: "Justin",
    LastName: "Stallard",
  };
  return (
    <Container>
      <Router>
        <Navbar user={user} cart={cart}></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/item/:id">
            <ItemContainer cart={addItemToCart}/>
          </Route>
          <Route path="/cart">
            <Cart cart={cart} cartFunctions={removeItemFromCart}/>
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
