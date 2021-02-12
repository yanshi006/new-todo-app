import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
// import firebase from "../config/Firebase";
// import "firebase/firestore";

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

const InputForm = ({ addTodos }) => {
  const classes = useStyles();

  const [input, setInput] = useState('');

  const handleClick = () => {
    if (input.trim() === '') {
      alert('午前の目標を入力しよう！')
    } else {
      addTodos(input)
    };
    setInput('');
  }

  const buttonTextStyle = {
    textTransform: 'none',
    fontSize: '16px'
  }

  return (
    // <Form onSubmit={handleSubmit}>
    //なにを取り出すのか分からなかった。
    <Form>
      <TextField id='addFiled' value={input} color='primary' label="Add" onChange={(e) => setInput(e.target.value)} />
      <ButtonContainer>
        <Button type='am' variant="outlined" style={buttonTextStyle} className={classes.amButton} onClick={() => handleClick()}>a.m.</Button>
        <Button type='pm' variant="outlined" style={buttonTextStyle} className={classes.pmButton} onClick={() => handleClick()}>p.m.</Button>
        <Button type='ev' variant="outlined" style={buttonTextStyle} className={classes.evButton} onClick={() => handleClick()}>night</Button>
      </ButtonContainer>
    </Form>
  )
}

export default InputForm;

const Form = styled.div`
  display: flex;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
  margin-left: 10px
`