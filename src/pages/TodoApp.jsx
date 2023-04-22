import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import Todos from "../components/Todos/Todos";
import { GlobalStyle } from "../styles/GlobalStyles";
import { StContainer } from '../styles/Container.styles';

function TodoApp() {
  return (
    <>
    <GlobalStyle/>
      <StContainer>
        <Header />
        <Form />
        <Todos />
      </StContainer>
    </>
  );
}

export default TodoApp;
