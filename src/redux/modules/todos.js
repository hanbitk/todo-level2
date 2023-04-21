const ADD_TODO = "todos/ADD_TODO";

const initialState = [
  {
    id: 1, // id는 모두 고유값이어야 합니다.
    title: "리액트 강의보기",
    description: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: 2, // id는 모두 고유값이어야 합니다.
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

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.payload.title,
          description: action.payload.description,
          isDone: false,
        },
      ];
    default:
      return state;
  }
};

export default todos;
