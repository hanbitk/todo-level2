import React from "react";
import styled from "styled-components";

const StHeader = styled.header`
  border: 1px solid lightgray;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px;
  margin-top: 10px;
`;

function Header() {
  return (
    <StHeader>
      <h3>My Todo List</h3>
      <h3>React</h3>
    </StHeader>
  );
}

export default Header;
