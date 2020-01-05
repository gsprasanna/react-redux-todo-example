import React from "react";
import { connect } from "react-redux";

import { INCOMPLETED, ADD_TODO } from "../Constants";
import { InputWithButton } from "./InputWithButton";
import TodoList from "./List";
import Filters from "./Filters";

const App = ({ addNewTodo, ...rest }) => {
  console.log(rest);
  return (
    <div>
      <InputWithButton buttonValue={"ADD"} handleClick={addNewTodo} />
      <TodoList />
      <Filters />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addNewTodo: todo =>
    dispatch({
      type: ADD_TODO,
      value: todo,
      status: INCOMPLETED
    })
});

export default connect(
  (state, props) => ({ ...state }),
  mapDispatchToProps
)(App);
