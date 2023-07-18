import React from "react";
import FormInput from "../../components/form/FormInput"
import useForm from "../../hooks/useForm";

import { VALIDATOR_REQUIRED } from '../../utils/validators'

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

  console.log(`Form Valid: ${formState.isValid}`)
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
          validators={[VALIDATOR_REQUIRED()]}
          errorText='Password is required'
          onInput={changeHandler}
        />
        <button
          diabled={!formState.isValid}
        >Login</button>
      </form>
    </div>
  )
};

export default LoginPage