import React from "react";
import styled from "styled-components";

const StTodosContainer = styled.div`
  padding: 20px;
`;

const StTodosDiv = styled.div``;

const StTodoTitleDiv = styled.div`
  margin-block: 15px;
`;

const StTodoDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const StTodoh2 = styled.h2``;

const StTodoBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 3px solid #bfc1bf;
  border-radius: 15px;
  width: 300px;
  height: 200px;
  padding-block: 10px;
  padding-inline: 20px;
`;

const StTodoBoxP = styled.p``;

const StTodoBoxh2 = styled.h2``;

const StTodoBoxButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StTodoBoxButton = styled.button`
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 15px;
  padding: 10px;
  width: 120px;
  font-weight: bold;
`;

function Todos() {
  return (
    <StTodosContainer>
      <StTodosDiv>
        <StTodoTitleDiv>
          <StTodoh2>Working...🔥</StTodoh2>
        </StTodoTitleDiv>
        <StTodoDiv>
          <StTodoBoxDiv>
            <StTodoBoxP>Details</StTodoBoxP>
            <StTodoBoxh2>Title</StTodoBoxh2>
            <StTodoBoxP>Description</StTodoBoxP>
            <StTodoBoxButtonDiv>
              <StTodoBoxButton borderColor="red">Delete</StTodoBoxButton>
              <StTodoBoxButton borderColor="green">Complete</StTodoBoxButton>
            </StTodoBoxButtonDiv>
          </StTodoBoxDiv>
          <StTodoBoxDiv>
            <StTodoBoxP>Details</StTodoBoxP>
            <StTodoBoxh2>Title</StTodoBoxh2>
            <StTodoBoxP>Description</StTodoBoxP>
            <StTodoBoxButtonDiv>
              <StTodoBoxButton borderColor="red">Delete</StTodoBoxButton>
              <StTodoBoxButton borderColor="green">Complete</StTodoBoxButton>
            </StTodoBoxButtonDiv>
          </StTodoBoxDiv>
        </StTodoDiv>
      </StTodosDiv>

      <StTodosDiv>
        <StTodoTitleDiv>
          <StTodoh2>Done...🌈</StTodoh2>
        </StTodoTitleDiv>
        <StTodoDiv>
          <StTodoBoxDiv>
            <StTodoBoxP>Details</StTodoBoxP>
            <StTodoBoxh2>Title</StTodoBoxh2>
            <StTodoBoxP>Description</StTodoBoxP>
            <StTodoBoxButtonDiv>
              <StTodoBoxButton borderColor="red">Delete</StTodoBoxButton>
              <StTodoBoxButton borderColor="green">Incomplete</StTodoBoxButton>
            </StTodoBoxButtonDiv>
          </StTodoBoxDiv>
          <StTodoBoxDiv>
            <StTodoBoxP>Details</StTodoBoxP>
            <StTodoBoxh2>Title</StTodoBoxh2>
            <StTodoBoxP>Description</StTodoBoxP>
            <StTodoBoxButtonDiv>
              <StTodoBoxButton borderColor="red">Delete</StTodoBoxButton>
              <StTodoBoxButton borderColor="green">Incomplete</StTodoBoxButton>
            </StTodoBoxButtonDiv>
          </StTodoBoxDiv>
        </StTodoDiv>
      </StTodosDiv>
    </StTodosContainer>
  );
}

export default Todos;
