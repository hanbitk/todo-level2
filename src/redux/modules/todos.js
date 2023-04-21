const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

const uuid = () => {
  return Math.floor(Date.now() + Math.random() * 100);
};

const initialState = [
  {
    id: uuid(), // id는 모두 고유값이어야 합니다.
    title: "리액트 강의보기",
    description: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: uuid(), // id는 모두 고유값이어야 합니다.
    title: "점심 먹기",
    description: "점심 뭐먹지..?",
    isDone: true,
  },
];

export const addTodo = (title, description) => {
  return {
    type: ADD_TODO,
    payload: {
      title,
      description,
    },
  };
};

export const deleteTodo = (newtodos) => {
  return {
    type: DELETE_TODO,
    payload: newtodos,
  };
};

export const toggleTodo = (updatetodos) => {
  return {
    type: TOGGLE_TODO,
    payload: updatetodos,
  };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: uuid(),
          title: action.payload.title,
          description: action.payload.description,
          isDone: false,
        },
      ];
    case DELETE_TODO:
      return action.payload;

    case TOGGLE_TODO:
      return action.payload;

    default:
      return state;
  }
};

export default todos;
