import {
  ADD_TODO,
  CHANGE_VIEW,
  CHANGE_TODO,
  ALL,
  COMPLETED,
  INCOMPLETED,
  EDIT_TODO,
  DELETE_TODO
} from "../Constants";

export const TodoReducer = (state = { todos: [], filter: ALL }, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat([
          {
            value: action.value,
            status: action.status
          }
        ])
      };
    case CHANGE_VIEW:
      return {
        ...state,
        filter: action.value
      };

    case CHANGE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.index
            ? {
                ...todo,
                status: todo.status === COMPLETED ? INCOMPLETED : COMPLETED
              }
            : todo
        )
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.index
            ? {
                value: (todo.value = action.value),
                ...todo
              }
            : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.index)
      };
    default:
      return state;
  }
};
