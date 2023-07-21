import React, { useContext, useEffect, useState } from "react";
import FormInput from "../../components/form/FormInput"
import useForm from "../../hooks/useForm";

import { VALIDATOR_REQUIRED, VALIDATOR_MINLENGTH } from '../../utils/validators';
import { AuthContext } from "../../context/AuthContext";

import './LoginPage.css';

const LoginPage = () => {
  const [submitError, setSubmitError] = useState('');
  const auth = useContext(AuthContext);


  const [formState, changeHandler] = useForm(
    {
      username: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const loginHandler = (event) => {
    event.preventDefault()
    let user = auth.login(event.target.username.value)
    user ? "" : setSubmitError("User does not exist")
  };

  const validateLocalStorageUser = () => {
    let userKey = localStorage.getItem('user')

    if (!userKey) {
      return null
    }

    try {
      return JSON.parse(userKey)
    } catch (error) {
      console.log(`Stored user key is invalid ${userKey}`)
      return null
    }
  }


  useEffect(() => {
    //check if localstorage has a user/auth key

    //placeholder auth logic
    if ( localStorage.user && validateLocalStorageUser() ){
      let authUser = JSON.parse(localStorage.getItem('user'))
      auth.login(authUser.username)
    }
  }, [])

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <FormInput
          type='text'
          id='username'
          label='username'
          validators={[VALIDATOR_REQUIRED()]}
          errorText='Username is required'
          onInput={changeHandler}
        />
        <FormInput
          type='password'
          id='password'
          label='password'
          validators={[VALIDATOR_REQUIRED(), VALIDATOR_MINLENGTH(6)]}
          errorText='Password is required'
          onInput={changeHandler}
        />
        <button
          disabled={!formState.isValid}
        >Login</button>
      </form>
      <p id='submit-error'>{submitError}</p>
    </div>
  )
};

export default LoginPage;