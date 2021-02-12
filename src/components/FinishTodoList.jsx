import React from "react";
import { FinishItem, ListTitle, ListSubTitle } from "./index";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  amButton: {
    color: theme.status.am,
  },
  pmButton: {
    color: theme.status.pm
  },
  evButton: {
    color: theme.status.ev
  }
}));


//このコンポーネントいるのか
const FinishTodoList = ({ returnTodo, finishTodos }) => {

  const classes = useStyles();

  return (
    <ListBox>
      <ListTitle label='Perfect' />
      <div>
        <ListSubTitle color={classes.amButton} label='a.m.' />
        <ul>
          {finishTodos.map(finishTodo => <FinishItem key={finishTodo.id} content={finishTodo.content} id={finishTodo.id} returnTodo={returnTodo} />)}
        </ul>
      </div>
      <div>
        <ListSubTitle color={classes.pmButton} label='p.m.' />
        <ul>
          {finishTodos.map(fiinishTodo => <FinishItem key={fiinishTodo.id} content={fiinishTodo.content} id={fiinishTodo.id} returnTodo={returnTodo} />)}
        </ul>
      </div>
      <div>
        <ListSubTitle color={classes.evButton} label='night' />
        <ul>
          {finishTodos.map(finishTodo => <FinishItem key={finishTodo.id} content={finishTodo.content} id={finishTodo.id} returnTodo={returnTodo} />)}
        </ul>
      </div>
    </ListBox>
  )
}

export default FinishTodoList;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column
`