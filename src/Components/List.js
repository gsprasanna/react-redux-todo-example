import React from "react";
import { connect } from "react-redux";
import {
  EDIT_TODO,
  DELETE_TODO,
  CHANGE_TODO,
  ALL,
  COMPLETED
} from "../Constants";

const TodoList = ({ todos, changeMode, deleteTodo, editTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <li
        key={index}
        onClick={_ => changeMode(index)}
        onChange={event => editTodo(index, event.target.value)}
        style={{ color: todo.status === COMPLETED ? "blue" : "red" }}
      >
        {todo.value} <button onClick={_ => deleteTodo(index)}>X</button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = (store, props) => ({
  todos:
    store.filter === ALL
      ? store.todos
      : store.todos.filter(data => data.status === store.filter)
});

const mapDispatchToProps = dispatch => ({
  changeMode: index =>
    dispatch({
      type: CHANGE_TODO,
      index
    }),
  deleteTodo: index => {
    dispatch({
      type: DELETE_TODO,
      index
    });
  },
  editTodo: (index, data) => {
    dispatch({
      type: EDIT_TODO,
      index,
      value: data
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
