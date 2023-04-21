import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const StDetailsContainerDiv = styled.div`
  border: 2px solid rgba(191, 193, 191, 0.5);
  margin: 5px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;
const StDetailDiv = styled.div`
  border: 1px solid rgba(191, 193, 191, 0.5);
  width: 40%;
  height: 60vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 55px;
  padding: 20px;
`;
const StDetailHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StDetailHeaderP = styled.p``;

const StDetailHeaderButton = styled.button`
  border: 1px solid #bfc1bf;
  border-radius: 10px;
  width: 110px;
  padding: 10px;
`;

const StDetailBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDetailTitleH2 = styled.h2`
  margin-top: 10px;
`;

const StDetailDescriptionP = styled.p`
  margin-top: 20px;
`;

function Details() {
  const todos = useSelector((state) => state.todos);
  const navigate = useNavigate();
  const params = useParams();

  const foundTodo = todos.find((todo) => todo.id === parseInt(params.id));

  console.log(foundTodo);
  return (
    <StDetailsContainerDiv>
      <StDetailDiv>
        <StDetailHeaderDiv>
          <StDetailHeaderP>{`ID: ${foundTodo.id}`}</StDetailHeaderP>
          <StDetailHeaderButton onClick={() => navigate("/")}>
            Back
          </StDetailHeaderButton>
        </StDetailHeaderDiv>
        <StDetailBodyDiv>
          <StDetailTitleH2>{foundTodo.title}</StDetailTitleH2>
          <StDetailDescriptionP>{foundTodo.description}</StDetailDescriptionP>
        </StDetailBodyDiv>
      </StDetailDiv>
    </StDetailsContainerDiv>
    // <div>
    //   <h3>{foundTodo.id}</h3>
    //   <p>{foundTodo.title}</p>
    //   <p>{foundTodo.description}</p>
    //   <button
    //     onClick={() => {
    //       navigate("/");
    //     }}
    //   >
    //     back
    //   </button>
    // </div>
  );
}

export default Details;
