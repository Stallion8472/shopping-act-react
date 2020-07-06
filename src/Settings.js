import React from "react";
import User from "./User.js";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  color: white;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1`
  margin: .5em 0;
  font-size: larger;
`;

const LinkElem = styled(NavLink)`
  font-size: large;
  margin: .5em .25em;
  padding: .5em 0;
  background-color: gray;
  border-radius: 10px;
  &.active {
    color: black;
    background-color: white;
  }
`;

function Settings() {
  let { path } = useRouteMatch();

  return (
    <Container>
      <LeftColumn>
        <Title>Settings</Title>
        <LinkElem to={`${path}/user`}>User</LinkElem>
        <LinkElem to={`${path}/account`}>Account</LinkElem>
        <LinkElem to={`${path}/random`}>Random</LinkElem>
      </LeftColumn>
      <Content>
        <Switch>
          <Route path={`${path}`}>
            <User />
          </Route>
          <Route path={`${path}/user`}>
            <User />
          </Route>
        </Switch>
      </Content>
    </Container>
  );
}

export default Settings;
