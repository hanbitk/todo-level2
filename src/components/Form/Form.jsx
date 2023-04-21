import React, { useState } from "react";
import styled from "styled-components";

const StForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ece9e9;
  border-radius: 5px;
  height: 100px;
  padding: 20px;
  margin-top: 20px;
`;

const StFormInputs = styled.div`
  display: flex;
`;

const StFormInputDiv = styled.div``;

const StFormInput = styled.input`
  background-color: #ffffff;
  width: 250px;
  padding: 10px;
  border-radius: 10px;
  margin-right: 10px;
`;

const StFormInputSpan = styled.span`
  margin-right: 10px;
`;

const StFormBtnDiv = styled.div``;

const StFormBtn = styled.button`
  background-color: #bfc1bf;
  padding: 10px;
  width: 120px;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
`;

function Form() {
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const changeTitle = (e) =>{
    setTitle(e.target.value)
  }

  const changeDescription = (e) =>{
    setDescription(e.target.value)
  }

  return (
    <StForm>
      <StFormInputs>
        <StFormInputDiv>
          <StFormInputSpan>Title</StFormInputSpan>
          <StFormInput value={title} type="text" onChange={changeTitle}/>
        </StFormInputDiv>
        <StFormInputDiv>
          <StFormInputSpan>Description</StFormInputSpan>
          <StFormInput value={description} type="text" onChange={changeDescription}/>
        </StFormInputDiv>
      </StFormInputs>

      <StFormBtnDiv>
        <StFormBtn>Add</StFormBtn>
      </StFormBtnDiv>
    </StForm>
  );
}

export default Form;
