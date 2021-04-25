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
  const [changeTackValue, setChangeTack] = useState("");
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
    index => {
      dispatch(REMOVE_TASK(index));
    },
    [dispatch]
  );

  const handleChangeTask = useCallback(
    (index, value) => {
      setChangeTack(value);
      dispatch(CHANGE_TASK(index));
    },
    [dispatch]
  );

  const handleSaveChangeTask = useCallback(
    (index, value) => {
      dispatch(SAVE_CHANGE_TASK({ index, value }));
    },
    [dispatch]
  );

  const handleInputChange = useCallback(
    event => {
      setChangeTack(event.target.value);
    },
    [dispatch]
  );

  const handleCompleteTack = useCallback(
    index => {
      dispatch(COMPLETE_TASK(index));
    },
    [dispatch]
  );

  const handleCloseChange = useCallback(
    (index, value) => {
      setChangeTack(value);
      dispatch(CHANGE_TASK(index));
    },
    [dispatch]
  );

  return (
    <TodoListPageLayout
      todoListState={todoListState}
      handleCreateTask={handleCreateTask}
      handleInput={handleInput}
      inputValue={inputValue}
      handleRemoveTask={index => handleRemoveTask(index)}
      handleChangeTask={(index, value) => handleChangeTask(index, value)}
      handleSaveChangeTask={(index, value) =>
        handleSaveChangeTask(index, value)
      }
      handleInputChange={handleInputChange}
      changeTackValue={changeTackValue}
      handleCompleteTack={index => handleCompleteTack(index)}
      handleClose={handleClose}
      handleClickOpen={index => handleClickOpen(index)}
      openModal={openModal}
      handleCloseChange={index => handleCloseChange(index)}
    />
  );
};

export default TodoListPageContainer;
