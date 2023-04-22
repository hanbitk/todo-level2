import React from "react";
import { useSelector } from "react-redux";
import DeleteButton from "../Buttons/DeleteButton";
import ToggleButton from "../Buttons/ToggleButton";
import { Link } from "react-router-dom";
import {
  StTodosContainer,
  StTodosDiv,
  StTodoTitleDiv,
  StTodoDiv,
  StTodoh2,
  StTodoBoxDiv,
  StTodoBoxP,
  StTodoBoxh2,
  StTodoBoxButtonDiv,
} from "../../styles/Todos.styles";

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
