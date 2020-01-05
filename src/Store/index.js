import { createStore } from "redux";

import { TodoReducer } from "../Reducers/todos";

export const store = createStore(TodoReducer);
