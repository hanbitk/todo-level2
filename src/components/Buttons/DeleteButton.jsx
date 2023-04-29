import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/modules/todos";
import Button from "./Button";

function DeleteButton({ todo }) {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    dispatch(deleteTodo(newTodos));
  };

  return (
    <div>
      <Button borderColor="red" onClick={() => deleteTodoHandler(todo.id)}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteButton;
