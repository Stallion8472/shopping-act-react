import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.75rem;
  line-height: 1;
  border: 1px solid #a0aec0;
`;

const LeftArrowButton = styled(Button)`
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

const RightArrowButton = styled(Button)`
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

function Pagination(props) {
  return (
    <Container>
      {props.currPage > 1 && (
        <LeftArrowButton onClick={() => props.changePage(props.currPage - 1)}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-chevron-left"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </LeftArrowButton>
      )}
      <Button>
        <span>{props.currPage}</span>
      </Button>
      {props.currPage + 1 <= props.maxPage && (
        <RightArrowButton onClick={() => props.changePage(props.currPage + 1)}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-chevron-right"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </RightArrowButton>
      )}
    </Container>
  );
}

export default Pagination;
