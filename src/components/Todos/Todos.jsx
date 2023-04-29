import React from "react";
import { useSelector } from "react-redux";
import { StTodosContainer } from "../../styles/Todos.styles";

import Todo from "./Todo";

function Todos() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <StTodosContainer>
      <Todo todos={todos} isDone={false}>Working...🔥</Todo>
      <Todo todos={todos} isDone={true}>Done...🌈</Todo>
    </StTodosContainer>
  );
}

export default Todos;
