import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from '../../redux/modules/todos';

const StTodoBoxButton = styled.button`
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 15px;
  padding: 10px;
  width: 110px;
  font-weight: bold;
`;

function ToggleButton({ todo }) {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  const toggleHandler = (id) => {
    const updatedTodos = [...todos];
    const idx = todos.findIndex((todo) => todo.id === id);
    updatedTodos[idx].isDone = !updatedTodos[idx].isDone;
    dispatch(toggleTodo(updatedTodos));
  };

  return (
    <StTodoBoxButton borderColor="green" onClick={() => toggleHandler(todo.id)}>
      {!todo.isDone ? "Complete" : "Incomplete"}
    </StTodoBoxButton>
  );
}

export default ToggleButton;
