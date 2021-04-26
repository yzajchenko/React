import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import {
  Input,
  withStyles,
  Button,
  ListItem,
  ListItemIcon,
  Checkbox
} from "@material-ui/core";

import styles from "./styles";

const Task = ({
  tack,
  handleCompleteTask,
  classes,
  changeTaskValue,
  handleInputChange,
  handleChangeTask,
  handleSaveChangeTask,
  handleClickOpen,
  handleCloseChange
}) => {
  const { value, isOnChange, complete } = tack;
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          disabled={complete}
          checked={complete}
          name="checked"
          color="primary"
          onClick={handleCompleteTask}
        />
      </ListItemIcon>

      <Input
        className={complete ? classes.tackComplete : classes.tack}
        value={isOnChange ? value : changeTaskValue}
        disabled={isOnChange || complete ? true : false}
        inputProps={{ "aria-label": "description" }}
        onChange={event => handleInputChange(event)}
      />

      <Button
        className={complete ? classes.done : ""}
        disabled={complete ? true : false}
        onClick={() =>
          isOnChange ? handleChangeTask() : handleSaveChangeTask()
        }
        variant="contained"
        color="primary"
        startIcon={
          isOnChange ? <BorderColorIcon /> : <CheckCircleOutlineIcon />
        }
      ></Button>

      {isOnChange ? (
        <Button
          variant="contained"
          color="primary"
          startIcon={<DeleteIcon />}
          onClick={handleClickOpen}
        ></Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          startIcon={<CloseIcon />}
          onClick={handleCloseChange}
        ></Button>
      )}
    </ListItem>
  );
};

export default withStyles(styles)(React.memo(Task));
