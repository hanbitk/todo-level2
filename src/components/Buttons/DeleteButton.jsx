import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../redux/modules/todos';
import { StTodoBoxButton } from '../../styles/Buttons.styles';

function DeleteButton({todo}) {

  const todos = useSelector((state) =>{
    return state.todos
  })

  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    dispatch(deleteTodo(newTodos));
  };
    
  return (
    <StTodoBoxButton
      borderColor="red"
      onClick={() => deleteTodoHandler(todo.id)}
    >
      Delete
    </StTodoBoxButton>
  );
}

export default DeleteButton;
