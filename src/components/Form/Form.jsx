import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import {
  StForm,
  StFormInputs,
  StFormInputDiv,
  StFormInput,
  StFormInputSpan,
  StFormBtnDiv,
  StFormBtn,
} from "../../styles/Form.styles";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  const todoSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      alert("할일을 입력해주세요");
    } else {
      dispatch(addTodo(title, description));
    }
    setTitle("");
    setDescription("");
  };

  console.log(todos);

  return (
    <StForm onSubmit={todoSubmitHandler}>
      <StFormInputs>
        <StFormInputDiv>
          <StFormInputSpan>Title</StFormInputSpan>
          <StFormInput value={title} type="text" onChange={changeTitle} />
        </StFormInputDiv>
        <StFormInputDiv>
          <StFormInputSpan>Description</StFormInputSpan>
          <StFormInput
            value={description}
            type="text"
            onChange={changeDescription}
          />
        </StFormInputDiv>
      </StFormInputs>

      <StFormBtnDiv>
        <StFormBtn>Add</StFormBtn>
      </StFormBtnDiv>
    </StForm>
  );
}

export default Form;
