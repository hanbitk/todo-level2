import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;  
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

input {
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
}       
`;
