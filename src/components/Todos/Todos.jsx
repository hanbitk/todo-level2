import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodo, toggleTodo } from "../../redux/modules/todos";
import DeleteButton from "../Buttons/DeleteButton";
import ToggleButton from "../Buttons/ToggleButton";

const StTodosContainer = styled.div`
  padding: 20px;
`;

const StTodosDiv = styled.div``;

const StTodoTitleDiv = styled.div`
  margin-block: 15px;
`;

const StTodoDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const StTodoh2 = styled.h2``;

const StTodoBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 3px solid #bfc1bf;
  border-radius: 15px;
  width: 300px;
  height: 200px;
  padding-block: 10px;
  padding-inline: 20px;
`;

const StTodoBoxP = styled.p``;

const StTodoBoxh2 = styled.h2``;

const StTodoBoxButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StTodoBoxButton = styled.button`
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 15px;
  padding: 10px;
  width: 120px;
  font-weight: bold;
`;

function Todos() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    dispatch(deleteTodo(newTodos));
  };

  const toggleHandler = (id) => {
    const updatedTodos = [...todos];
    const idx = todos.findIndex((todo) => todo.id === id);
    updatedTodos[idx].isDone = !updatedTodos[idx].isDone;
    dispatch(toggleTodo(updatedTodos));
  };

  return (
    <StTodosContainer>
      <StTodosDiv>
        <StTodoTitleDiv>
          <StTodoh2>Working...🔥</StTodoh2>
        </StTodoTitleDiv>
        <StTodoDiv>
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => {
              return (
                <StTodoBoxDiv key={todo.id}>
                  <StTodoBoxP>{todo.details}</StTodoBoxP>
                  <StTodoBoxh2>{todo.title}</StTodoBoxh2>
                  <StTodoBoxP>{todo.description}</StTodoBoxP>
                  <StTodoBoxButtonDiv>
                    <DeleteButton
                      deleteTodoHandler={deleteTodoHandler}
                      todo={todo}
                    />
                    <ToggleButton todo={todo} toggleHandler={toggleHandler} />
                  </StTodoBoxButtonDiv>
                </StTodoBoxDiv>
              );
            })}
        </StTodoDiv>
      </StTodosDiv>

      <StTodosDiv>
        <StTodoTitleDiv>
          <StTodoh2>Done...🌈</StTodoh2>
        </StTodoTitleDiv>
        <StTodoDiv>
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => {
              return (
                <StTodoBoxDiv key={todo.id}>
                  <StTodoBoxP>{todo.details}</StTodoBoxP>
                  <StTodoBoxh2>{todo.title}</StTodoBoxh2>
                  <StTodoBoxP>{todo.description}</StTodoBoxP>
                  <StTodoBoxButtonDiv>
                    <DeleteButton
                      deleteTodoHandler={deleteTodoHandler}
                      todo={todo}
                    />
                    <ToggleButton todo={todo} toggleHandler={toggleHandler} />
                  </StTodoBoxButtonDiv>
                </StTodoBoxDiv>
              );
            })}
        </StTodoDiv>
      </StTodosDiv>
    </StTodosContainer>
  );
}

export default Todos;
