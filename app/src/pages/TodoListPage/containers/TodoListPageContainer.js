import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CREATE_TASK,
  COMPLETE_TASK,
  SAVE_CHANGE_TASK,
  REMOVE_TASK,
  CHANGE_TASK
} from "../actions";

import TodoListPageLayout from "../components/TodoListPageLayout";

const TodoListPageContainer = () => {
  const dispatch = useDispatch();
  const todoListState = useSelector(
    state => state.todoListManagerReducer.todoList
  );

  const [inputValue, setInputValue] = useState("");
  const [changeTaskValue, setChangeTask] = useState("");
  const [openModal, setOpen] = useState({ open: false });

  const handleClickOpen = useCallback(
    index => {
      setOpen({ open: true, index: index });
    },
    [openModal]
  );

  const handleClose = useCallback(() => {
    setOpen({ open: false });
  }, [openModal]);

  const handleInput = useCallback(
    event => {
      const { value } = event.target;
      setInputValue(value);
    },
    [inputValue]
  );

  const handleCreateTask = useCallback(
    event => {
      event.preventDefault();
      if (inputValue) {
        dispatch(CREATE_TASK(inputValue));
      }
      setInputValue("");
    },
    [dispatch, inputValue]
  );

  const handleRemoveTask = useCallback(
    id => {
      dispatch(REMOVE_TASK(id));
    },
    [dispatch]
  );

  const handleChangeTask = useCallback(
    (id, value) => {
      setChangeTask(value);
      dispatch(CHANGE_TASK(id));
    },
    [dispatch]
  );

  const handleSaveChangeTask = useCallback(
    (id, value) => {
      dispatch(SAVE_CHANGE_TASK({ id, value }));
    },
    [dispatch]
  );

  const handleInputChange = useCallback(
    event => {
      setChangeTask(event.target.value);
    },
    [dispatch]
  );

  const handleCompleteTask = useCallback(
    id => {
      dispatch(COMPLETE_TASK(id));
    },
    [dispatch]
  );

  const handleCloseChange = useCallback(
    (id, value) => {
      setChangeTask(value);
      dispatch(CHANGE_TASK(id));
    },
    [dispatch]
  );

  return (
    <TodoListPageLayout
      todoListState={todoListState}
      handleCreateTask={handleCreateTask}
      handleInput={handleInput}
      inputValue={inputValue}
      handleRemoveTask={id => handleRemoveTask(id)}
      handleChangeTask={(id, value) => handleChangeTask(id, value)}
      handleSaveChangeTask={(id, value) => handleSaveChangeTask(id, value)}
      handleInputChange={handleInputChange}
      changeTaskValue={changeTaskValue}
      handleCompleteTask={id => handleCompleteTask(id)}
      handleClose={handleClose}
      handleClickOpen={id => handleClickOpen(id)}
      openModal={openModal}
      handleCloseChange={id => handleCloseChange(id)}
    />
  );
};

export default TodoListPageContainer;
