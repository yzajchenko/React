import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Input,
  withStyles,
  TextField,
  Button,
  List,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@material-ui/core";

import Routes from "../../../../routes/routesNames";
import NextPage from "../../../../comonComponents/NextPage";
import Tack from "../Tack";

import styles from "./styles";

const TodoListPageLayout = ({
  handleCreateTask,
  todoListState,
  inputValue,
  handleInput,
  handleRemoveTask,
  handleChangeTask,
  handleSaveChangeTask,
  handleInputChange,
  handleCompleteTack,
  changeTackValue,
  classes,
  handleClickOpen,
  handleClose,
  openModal,
  handleCloseChange
}) => {
  return (
    <>
      <Link to={Routes.HOME_PAGE}>
        <NextPage page="Home Page" />
      </Link>
      <div className={classes.todo}>
        <form onSubmit={handleCreateTask}>
          <TextField
            value={inputValue}
            onChange={event => handleInput(event)}
            placeholder="New Tack"
          />
          <Input type="submit" value="Add Task" />
        </form>
        <List>
          {todoListState.map((tack, index) => {
            return (
              <Tack
                key={index}
                tack={tack}
                handleCompleteTack={() => handleCompleteTack(index)}
                changeTackValue={changeTackValue}
                handleInputChange={event => handleInputChange(event)}
                handleChangeTask={() => handleChangeTask(index, tack.value)}
                handleSaveChangeTask={() =>
                  handleSaveChangeTask(index, changeTackValue)
                }
                handleClickOpen={() => handleClickOpen(index)}
                handleCloseChange={() => handleCloseChange(index, tack.value)}
              />
            );
          })}
        </List>
        <Dialog
          open={openModal.open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete the task
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleRemoveTask(openModal.index);
                return handleClose();
              }}
              color="primary"
            >
              Yes
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

TodoListPageLayout.propTypes = {
  handleCreateTask: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
  handleChangeTask: PropTypes.func.isRequired,
  handleSaveChangeTask: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleCompleteTack: PropTypes.func.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  openModal: PropTypes.object.isRequired,
  handleCloseChange: PropTypes.func.isRequired,
  todoListState: PropTypes.array.isRequired
};

export default withStyles(styles)(TodoListPageLayout);
