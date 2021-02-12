// import React, { useState } from "react";
// import styled from "styled-components";
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import { AppMessage } from "../components/index";
// import { RegisterTitle } from "../components/index";
// // import firebase from "../config/Firebase";
// import { Link } from "react-router-dom";

// const useStyles = makeStyles({
//   loginButton: {
//     backgroundColor: '#03fc35',
//     color: '#fff',
//     '&:hover': {
//       backgroundColor: '#03fc5a'
//     }
//   },
//   linkButton: {
//     backgroundColor: '#FC8A25',
//     color: '#fff',
//     borderRadius: '5px',
//     textDecoration: 'none',
//     padding: '10px',
//     fontSize: '14px'
//   }
// })

// const Login = ({ history }) => {

//   const classes = useStyles();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <AppMessage message="Let's get started" />
//       <LoginContainer>
//         <RegisterTitle title='Login' />
//         <TextField value={email} type='email' required name='email' placeholder='please your e-mail' label="E-mail" onChange={(e) => setEmail(e.target.value)} />
//         <TextField value={password} type='password' required name='password' placeholder='please your password' label="Password" onChange={(e) => setPassword(e.target.value)} />
//         <Button type='submit' variant="contained" className={classes.loginButton}>Login</Button>
//         <Link className={classes.linkButton} to='signup'>新規登録</Link>
//       </LoginContainer>
//     </form>
//   )
// }

// export default Login;

// const LoginContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   height: 330px;
//   background-color: #ddd;
//   width: 60%;
//   margin: 5% auto 0px;
//   padding-bottom: 30px;
// `