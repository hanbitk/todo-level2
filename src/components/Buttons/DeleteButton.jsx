import React from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";

const StTodoBoxButton = styled.button`
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 15px;
  padding: 10px;
  width: 120px;
  font-weight: bold;
`;

function DeleteButton({ todo, deleteTodoHandler }) {
    
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
