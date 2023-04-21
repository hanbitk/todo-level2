import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../pages/Details";
import TodoApp from '../pages/TodoApp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoApp/>}/>
        <Route path='/:id' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
