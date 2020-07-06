import React from "react";
import Home from "./Home.js";
import Settings from "./Settings.js";
import Navbar from "./Navbar.js";
import Cart from "./Cart.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import ItemContainer from "./ItemContainer.js";

const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #282c34;
`;

function App() {
  const user = {
    FirstName: "Justin",
    LastName: "Stallard",
  };
  return (
    <Container>
      <Router>
        <Navbar user={user}></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/item/:id">
            <ItemContainer />
          </Route>
          <Route path="/cart">
            <Cart />
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
