import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { deleteTodo } from '../../redux/modules/todos';

const StTodoBoxButton = styled.button`
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 15px;
  padding: 10px;
  width: 110px;
  font-weight: bold;
`;

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
