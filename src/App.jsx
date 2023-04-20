import "./App.css";
import styled from "styled-components";
import Header from './components/Header/Header';
import Form from './components/Form/Form';

const StContainer = styled.div`
  border: 1px solid red;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  return <StContainer>
    <Header/>
    <Form/>
  </StContainer>;
}

export default App;
