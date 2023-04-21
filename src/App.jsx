import "./App.css";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

const StContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <StContainer>
      <Header />
      <Form />
      <Todos />
    </StContainer>
  );
}

export default App;
