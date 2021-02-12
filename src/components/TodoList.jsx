import React from "react";
import { Item, ListTitle, ListSubTitle } from "./index";
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


const TodoList = ({ deleteTodos, addFinishTodos, todos }) => {

  const classes = useStyles();

  return (
    <ListBox>
      <ListTitle label='Imperfect' />
      <div>
        <ListSubTitle color={classes.amButton} label='a.m.' />
        <ul>
          {todos.map(todo => <Item key={todo.id} content={todo.content} id={todo.id} deleteTodos={deleteTodos} addFinishTodos={addFinishTodos} />)}
        </ul>
      </div>
      <div>
        <ListSubTitle color={classes.pmButton} label='p.m.' />
        <ul>
          {todos.map(todo => <Item key={todo.id} content={todo.content} id={todo.id} deleteTodos={deleteTodos} addFinishTodos={addFinishTodos} />)}
        </ul>
      </div>
      <div>
        <ListSubTitle color={classes.evButton} label='night' />
        <ul>
          {todos.map(todo => <Item key={todo.id} content={todo.content} id={todo.id} deleteTodos={deleteTodos} addFinishTodos={addFinishTodos} />)}
        </ul>
      </div>
    </ListBox>
  )
}

export default TodoList;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column
`