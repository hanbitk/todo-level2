import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyles";
import {
  StDetailsContainerDiv,
  StDetailDiv,
  StDetailHeaderDiv,
  StDetailHeaderP,
  StDetailHeaderButton,
  StDetailBodyDiv,
  StDetailTitleh2,
  StDetailDescriptionP,
} from "../styles/Details.styles";

function Details() {
  const todos = useSelector((state) => state.todos);
  const navigate = useNavigate();
  const params = useParams();

  const foundTodo = todos.find((todo) => todo.id === parseInt(params.id));

  console.log(foundTodo);
  return (
    <>
      <GlobalStyle />
      <StDetailsContainerDiv>
        <StDetailDiv>
          <StDetailHeaderDiv>
            <StDetailHeaderP>{`ID: ${foundTodo.id}`}</StDetailHeaderP>
            <StDetailHeaderButton onClick={() => navigate("/")}>
              Back
            </StDetailHeaderButton>
          </StDetailHeaderDiv>
          <StDetailBodyDiv>
            <StDetailTitleh2>{foundTodo.title}</StDetailTitleh2>
            <StDetailDescriptionP>{foundTodo.description}</StDetailDescriptionP>
          </StDetailBodyDiv>
        </StDetailDiv>
      </StDetailsContainerDiv>
    </>
  );
}

export default Details;
