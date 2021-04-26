import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  todoList: []
};

const TodoListManagerReducer = handleActions(
  {
    [actions.CREATE_TASK]: (state, { payload }) => {
      const newTask = {
        id: state.todoList.length,
        value: payload,
        isOnChange: true,
        complete: false
      };
      return {
        ...state,
        todoList: [...state.todoList, newTask]
      };
    },
    [actions.REMOVE_TASK]: (state, { payload }) => {
      const todoListCopy = [...state.todoList];
      const todoListNew = todoListCopy.filter(task => task.id !== payload);
      return {
        ...state,
        todoList: todoListNew
      };
    },
    [actions.CHANGE_TASK]: (state, { payload }) => {
      const todoListCopy = [...state.todoList];
      const findTack = todoListCopy.filter(task => task.id === payload);
      findTack.forEach(task => (task.isOnChange = !task.isOnChange));
      return {
        ...state,
        todoList: todoListCopy
      };
    },
    [actions.COMPLETE_TASK]: (state, { payload }) => {
      const todoListCopy = [...state.todoList];
      const findTack = todoListCopy.filter(task => task.id === payload);
      findTack.forEach(task => (task.complete = !task.complete));
      return {
        ...state,
        todoList: todoListCopy
      };
    },
    [actions.SAVE_CHANGE_TASK]: (state, { payload }) => {
      const todoListCopy = [...state.todoList];
      const findTack = todoListCopy.filter(task => task.id === payload.id);
      findTack.forEach(task => {
        task.isOnChange = !task.isOnChange;
        if (payload.value) {
          task.value = payload.value;
        }
      });
      return {
        ...state,
        todoList: todoListCopy
      };
    }
  },
  initialState
);

export default TodoListManagerReducer;