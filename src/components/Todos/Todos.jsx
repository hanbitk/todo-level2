import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DeleteButton from "../Buttons/DeleteButton";
import ToggleButton from "../Buttons/ToggleButton";
import { Link } from "react-router-dom";

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

function Todos() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <StTodosContainer>
      <StTodosDiv>
        <StTodoTitleDiv>
          <StTodoh2>Working...🔥</StTodoh2>
        </StTodoTitleDiv>
        <StTodoDiv>
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => {
              return (
                <StTodoBoxDiv key={todo.id}>
                  <StTodoBoxP>
                    <Link
                      to={`/${todo.id}`}
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      Details
                    </Link>
                  </StTodoBoxP>
                  <StTodoBoxh2>{todo.title}</StTodoBoxh2>
                  <StTodoBoxP>{todo.description}</StTodoBoxP>
                  <StTodoBoxButtonDiv>
                    <DeleteButton todo={todo} />
                    <ToggleButton todo={todo} />
                  </StTodoBoxButtonDiv>
                </StTodoBoxDiv>
              );
            })}
        </StTodoDiv>
      </StTodosDiv>

      <StTodosDiv>
        <StTodoTitleDiv>
          <StTodoh2>Done...🌈</StTodoh2>
        </StTodoTitleDiv>
        <StTodoDiv>
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => {
              return (
                <StTodoBoxDiv key={todo.id}>
                  <StTodoBoxP>
                    <Link
                      to={`/${todo.id}`}
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      Details
                    </Link>
                  </StTodoBoxP>
                  <StTodoBoxh2>{todo.title}</StTodoBoxh2>
                  <StTodoBoxP>{todo.description}</StTodoBoxP>
                  <StTodoBoxButtonDiv>
                    <DeleteButton todo={todo} />
                    <ToggleButton todo={todo} />
                  </StTodoBoxButtonDiv>
                </StTodoBoxDiv>
              );
            })}
        </StTodoDiv>
      </StTodosDiv>
    </StTodosContainer>
  );
}

export default Todos;
