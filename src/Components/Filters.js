import React from "react";
import { connect } from "react-redux";

import { CHANGE_VIEW, ALL, COMPLETED, INCOMPLETED } from "../Constants";

const TodoList = ({ setView }) => (
  <div>
    <button onClick={_ => setView(ALL)}>ALL</button>
    <button onClick={_ => setView(COMPLETED)}>COMLETED</button>
    <button onClick={_ => setView(INCOMPLETED)}>INCOMPLETED</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  setView: view =>
    dispatch({
      type: CHANGE_VIEW,
      value: view
    })
});

export default connect(
  null,
  mapDispatchToProps
)(TodoList);
