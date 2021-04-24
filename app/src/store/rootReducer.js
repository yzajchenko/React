import { combineReducers } from "redux";
import counterManagerReducer from "../pages/CounterPage/reducers";

const rootReducer = combineReducers({ counterManagerReducer });

export default rootReducer;
