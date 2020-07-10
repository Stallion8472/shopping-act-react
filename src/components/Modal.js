import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100vh;
  width: 100vw;
  background-color: rgba(237, 242, 247, 0.9);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  margin: 1em;
  height: 95vh;
`;

const TitleBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2em 1em 0 1em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 1em 0 1em;
`;

const Title = styled.h1`
  font-size: larger;
  font-weight: 600;
`;

const BasicLabel = styled.label`
  line-height: 2;
`;

const BasicInput = styled.input`
  padding: .5rem;
  border-radius: 8px;
  background-color: #E2E8F0;
`;

const Button = styled.button`
  margin: 1em 0 0 0;
  padding: 0.5em 1em;
  color: black;
  border-radius: 8px;
  background-color: #F6AD55;
  &:hover{
    background-color: #ED8936;
  }
`;

function Modal(props) {
  return (
    <Background>
      <Container>
        <TitleBar>
          <Title>Checkout</Title>
          <button onClick={() => props.showModal(false)}>
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-x-square-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.854 4.854a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"
              />
            </svg>
          </button>
        </TitleBar>
        <Content>
          <BasicLabel>Street</BasicLabel>
          <BasicInput type="text"></BasicInput>
          <BasicLabel>City</BasicLabel>
          <BasicInput type="text"></BasicInput>
          <BasicLabel>State</BasicLabel>
          <select>
            <option value="KS">Kansas</option>
            <option value="OH">Ohio</option>
            <option value="KY">Kentucky</option>
            <option value="NY">New York</option>
          </select>
          <BasicLabel>Zip</BasicLabel>
          <BasicInput type="number"></BasicInput>
          <Button>Submit</Button>
        </Content>
      </Container>
    </Background>
  );
}

export default Modal;
