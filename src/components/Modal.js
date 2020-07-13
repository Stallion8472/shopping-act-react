import React from "react";
import styled from "styled-components";
import { device } from "../breakpoints.js";

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
  padding: 2em 1em 0 1em;
`;

const TitleBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 100%;
  @media ${device.tablet} {
    margin: 1rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: larger;
  font-weight: 600;
`;

const BasicLabel = styled.label`
`;

const BasicInput = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  background-color: #e2e8f0;
  flex-grow: 1;

  &:focus{
    background-color: white;
  }
`;

const BasicSelect = styled.select`
  padding: .5rem 1rem 0.5rem 0.5rem;
  border-radius: 8px;
  background-color: #e2e8f0;

  &:focus{
    background-color: white;
  }
`;

const Button = styled.button`
  padding: 0.5em 1em;
  color: black;
  border-radius: 8px;
  background-color: #f6ad55;
  &:hover {
    background-color: #ed8936;
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
        <SectionContent>
            <ItemGroup>
              <BasicLabel>First Name</BasicLabel>
              <BasicInput type="text"></BasicInput>
            </ItemGroup>
            <ItemGroup>
              <BasicLabel>Last Name</BasicLabel>
              <BasicInput type="text"></BasicInput>
            </ItemGroup>
          </SectionContent>
          <SectionContent>
            <ItemGroup>
              <BasicLabel>Street</BasicLabel>
              <BasicInput type="text"></BasicInput>
            </ItemGroup>
            <ItemGroup>
              <BasicLabel>City</BasicLabel>
              <BasicInput type="text"></BasicInput>
            </ItemGroup>
          </SectionContent>
          <SectionContent>
            <ItemGroup>
              <BasicLabel>State</BasicLabel>
              <BasicSelect>
                <option value="KS">Kansas</option>
                <option value="OH">Ohio</option>
                <option value="KY">Kentucky</option>
                <option value="NY">New York</option>
              </BasicSelect>
            </ItemGroup>
            <ItemGroup>
              <BasicLabel>Zip</BasicLabel>
              <BasicInput type="number"></BasicInput>
            </ItemGroup>
          </SectionContent>
          <Button>Submit</Button>
        </Content>
      </Container>
    </Background>
  );
}

export default Modal;
