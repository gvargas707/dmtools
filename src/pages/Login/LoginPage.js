import React from "react";
import FormInput from "../../components/form/FormInput"
import useForm from "../../hooks/useForm";

import { VALIDATOR_REQUIRED, VALIDATOR_MINLENGTH } from '../../utils/validators'

import './LoginPage.css';

const LoginPage = () => {

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
  )

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form>
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
    </div>
  )
};

export default LoginPage