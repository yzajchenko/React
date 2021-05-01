import { combineReducers } from "redux";
import counterManagerReducer from "../pages/CounterPage/reducers";
import todoListManagerReducer from "../pages/TodoListPage/reducers";

const rootReducer = combineReducers({
  counterManagerReducer,
  todoListManagerReducer
});

export default rootReducer;
