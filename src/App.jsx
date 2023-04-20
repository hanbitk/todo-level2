import "./App.css";
import styled from "styled-components";

const StContainer = styled.div`
  border: 1px solid red;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  return <StContainer>Hello</StContainer>;
}

export default App;
