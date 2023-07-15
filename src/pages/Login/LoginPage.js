import React from "react";
import FormInput from "../../components/form/FormInput"

import { VALIDATOR_REQUIRED } from '../../utils/validators'

import './LoginPage.css';

const LoginPage = () => {

  const inputHandler = (evt) => {

  }

  const changeHandler = (evt) => {
    console.log(evt.target.value)
  }

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form>
        <FormInput
          type='text'
          id='username'
          label='username'
          errorText='Username is required'
          onInput={changeHandler}
        />
        <FormInput
          type='password'
          id='password'
          label='password'
          errorText='Password is required'
          onInput={changeHandler}
        />
      </form>
    </div>
  )
};

export default LoginPage