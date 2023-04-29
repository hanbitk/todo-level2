import { Link } from "react-router-dom";
import {
  StTodosSection,
  StTodoTitleDiv,
  StTodoDiv,
  StTodoh2,
  StTodoBoxDiv,
  StTodoBoxP,
  StTodoBoxh2,
  StTodoBoxButtonDiv,
} from "../../styles/Todos.styles";
import DeleteButton from "../Buttons/DeleteButton";
import ToggleButton from "../Buttons/ToggleButton";

function Todo({ children, todos, isDone }) {
    
  const filteredTodos = () => {
    return todos.filter((todo) => todo.isDone === isDone);
  };

  return (
    <StTodosSection>
      <StTodoTitleDiv>
        <StTodoh2>{children}</StTodoh2>
      </StTodoTitleDiv>
      <StTodoDiv>
        {filteredTodos().map((todo) => {
          return (
            <StTodoBoxDiv key={todo.id}>
              <StTodoBoxP>
                <Link
                  to={`/${todo.id}`}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  Details
                </Link>
              </StTodoBoxP>
              <StTodoBoxh2>{todo.title}</StTodoBoxh2>
              <StTodoBoxP>{todo.description}</StTodoBoxP>
              <StTodoBoxButtonDiv>
                <DeleteButton todo={todo} />
                <ToggleButton todo={todo} />
              </StTodoBoxButtonDiv>
            </StTodoBoxDiv>
          );
        })}
      </StTodoDiv>
    </StTodosSection>
  );
}

export default Todo;
