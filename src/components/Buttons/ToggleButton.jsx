import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/modules/todos";
import { StTodoBoxButton } from "../../styles/Buttons.styles";
import Button from "./Button";

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
    <Button borderColor="green" onClick={() => toggleHandler(todo.id)}>
      {!todo.isDone ? "Complete" : "Incomplete"}
    </Button>
  );
}

export default ToggleButton;
