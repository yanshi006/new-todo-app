import React, { useState, useCallback, useEffect } from "react";
import { InputForm, Today, TodoList, FinishTodoList } from "./index";
import styled from "styled-components";
import shortid from "shortid";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333'
    }
  },
  status: {
    am: '#03dffc',
    pm: '#03fc35',
    ev: '#c603fc'
  },
  typography: {
    fontFamily: 'serif',
  },
});

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [finishTodos, setFinishTodos] = useState([]);
  //午前、午前、夜を分ける
  const [time, setTime] = useState('');
  //完了か未完了か分ける
  const [isPerfect, setIsPerfect] = useState(false);
  // const [todos, setTodos] = useState([]);
  // const [finishTodos, setFinishTodos] = useState([]);

  // //入力値を追加する
  const addTodos = (content, time) => {
    setTodos([
      ...todos, {
        content: content,
        id: shortid.generate(),
        time: time,
        isPerfect: isPerfect
      }
    ])
    switch (time) {
      case 'a.m.':
        setTime('a.m.');
        break;
      case 'p.m.':
        setTime('p.m.');
        break;
      case 'night':
        setTime('night');
        break;
      default:
        return time
    }
  }
  // const addTodos = useCallback((content, type) => {
  //   setTodos([
  //     ...todos, {
  //       content: content,
  //       idp: shortid.generate(),
  //       type: type
  //     }
  //   ])
  //   console.log(todos)
  //   if (type === 'am') {
  //     setType('am')
  //     console.log(type)
  //   } else if (type === 'pm') {
  //     setType('pm')
  //   } else if (type === 'ev') {
  //     setType('ev')
  //   }
  // }, [setTodos, todos])

  // //TodoListの削除ボタンが押された時の関数
  const deleteTodos = (id, isPerfect) => {
    if (isPerfect === true) {
      setTodos(
        todos.filter(todo => todo.id !== id)
      )
    } else if (isPerfect === false) {
      setFinishTodos(
        finishTodos.filter(finishTodo => finishTodo.id !== id)
      )
    }
  }
  // const deleteTodos = useCallback((id, type) => {
  //   setTodos(
  //     todos.filter(todo => todo.id !== id && todo.type !== type)
  //   )
  // }, [setTodos, todos]);

  // //FinishTodoListの削除ボタンが押された時の関数

  // const finishDeleteTodos = useCallback(id => {
  //   setFinishTodos(
  //     finishTodos.filter(finishTodo => finishTodo.id !== id)
  //   )
  // }, [setFinishTodos, finishTodos]);

  // //完了ボタンが押された時の関数
  const addFinishTodos = (id) => {
    deleteTodos(id);
    //どちらの書き方の方がよいのか
    const compTodo = todos.find(todo => todo.id === id);
    setFinishTodos([
      ...finishTodos, compTodo
    ])
    // const compTodo = todos.find(todo => todo.id === id);
    // const finishArray = finishTodos;
    // finishArray.push(compTodo);
    // setFinishTodos(finishArray);
  }

  // const addFinishTodos = useCallback(id => {
  //   deleteTodos(id);
  //   const compTodo = todos.find(todo => todo.id === id);
  //   //どっちの書き方のが良いのか
  //   const finishArray = finishTodos;
  //   finishArray.push(compTodo);
  //   setFinishTodos(finishArray);
  // }, [deleteTodos, finishTodos, todos, setFinishTodos]);

  // //戻すボタンが押された時の関数
  const returnTodo = (id) => {
    setIsPerfect(true);
    deleteTodos(id);
    const backTodo = finishTodos.find(finishTodo => finishTodo.id === id);
    setTodos(
      ...todos, backTodo
    )
  }
  // const returnTodo = useCallback(id => {
  //   finishDeleteTodos(id);
  //   //どっちの書き方のが良いのか
  //   const resTodo = finishTodos.find(finishTodo => finishTodo.id === id);
  //   setTodos([
  //     ...todos, resTodo
  //   ])
  // }, [finishDeleteTodos, finishTodos, todos, setTodos]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Title>TodoApp</Title>
          <InputForm addTodos={addTodos} />
          <Today />
        </Container>
        <ListContainer>
          <TodoList deleteTodos={deleteTodos} addFinishTodos={addFinishTodos} todos={todos} />
          <FinishTodoList returnTodo={returnTodo} finishTodos={finishTodos} />
        </ListContainer>
      </ThemeProvider>
    </>
  )
}

export default TodoApp;

const Title = styled.h1`
  font-family: serif;
  font-size: 40px;
  color: #333;
  letter-spacing: 1px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`
const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`