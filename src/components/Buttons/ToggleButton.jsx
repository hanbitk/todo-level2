import React from "react";
import styled from "styled-components";

const StTodoBoxButton = styled.button`
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 15px;
  padding: 10px;
  width: 110px;
  font-weight: bold;
`;

function ToggleButton({ todo, toggleHandler }) {
  return (
    <StTodoBoxButton borderColor="green" onClick={() => toggleHandler(todo.id)}>
      {!todo.isDone ? "Complete" : "Incomplete"}
    </StTodoBoxButton>
  );
}

export default ToggleButton;
