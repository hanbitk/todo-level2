import React from "react";
import { StTodoBoxButton } from "../../styles/Buttons.styles";

function Button({ borderColor, children, onClick }) {
  return (
    <StTodoBoxButton borderColor={borderColor} onClick={onClick}>
      {children}
    </StTodoBoxButton>
  );
}

export default Button;
