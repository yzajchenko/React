import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  todoList: []
};

const TodoListManagerReducer = handleActions(
  {
    [actions.CREATE_TASK]: (state, { payload }) => {
      const newTask = {
        value: payload,
        handleChangeDisabled: true,
        complete: false
      };
      return {
        ...state,
        todoList: [...state.todoList, newTask]
      };
    },
    [actions.REMOVE_TASK]: (state, { payload }) => {
      const todoListCopy = [...state.todoList];
      todoListCopy.splice(payload, 1);
      return {
        ...state,
        todoList: todoListCopy
      };
    },
    [actions.CHANGE_TASK]: (state, { payload }) => {
      const todoListCopy = [...state.todoList];
      const findTack = todoListCopy[payload];
      findTack.handleChangeDisabled = !findTack.handleChangeDisabled;
      return {
        ...state,
        todoList: todoListCopy
      };
    },
    [actions.COMPLETE_TASK]: (state, { payload }) => {
      const todoListCopy = [...state.todoList];
      const findTack = todoListCopy[payload];
      findTack.complete = !findTack.complete;
      return {
        ...state,
        todoList: todoListCopy
      };
    },

    [actions.SAVE_CHANGE_TASK]: (state, { payload }) => {
      const todoListCopy = [...state.todoList];
      const findTack = todoListCopy[payload.index];
      findTack.handleChangeDisabled = !findTack.handleChangeDisabled;
      findTack.value = payload.value;
      return {
        ...state,
        todoList: todoListCopy
      };
    }
  },
  initialState
);

export default TodoListManagerReducer;
