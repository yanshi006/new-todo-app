import React from "react";
// import { AppContext } from "../AppContext";
import { ItemFiled } from "./index";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  amButton: {
    backgroundColor: '#9CA592',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#ADBC9D'
    }
  },
});

const FinishItem = ({ content, id, returnTodo, finishDeleteTodos }) => {
  const classes = useStyles();

  return (
    <ItemFiled
      label={content}
      type='am'
      color={classes.amButton}
      text='Imperfect'
      firstOnClick={() => finishDeleteTodos(id)}
      secondOnClick={() => returnTodo(id)}
    />
  )
}

export default FinishItem;