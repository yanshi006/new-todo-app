import React, { useState } from "react";
import { ItemFiled } from "./index";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  pmButton: {
    backgroundColor: '#88FF01',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#A0FF33'
    }
  },
});

const Item = ({ content, id, deleteTodos, addFinishTodos }) => {

  const classes = useStyles();

  const [text, setText] = useState('');

  return (
    <ItemFiled
      label={content}
      type='submit'
      color={classes.pmButton}
      text='Perfect'
      firstOnClick={() => deleteTodos(id)}
      secondOnClick={() => addFinishTodos(id)}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  )
}

export default Item;