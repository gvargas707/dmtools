import React, {useReducer, useEffect} from 'react';

import { validate } from '../../utils/validators';

/**
 * Reducer function to manage the state of the component.
 * 
 * @param {Object} state - The current state of the form
 * @param {Object} action - The action to be performed on the form
 * @param {string} action.type - The type of action to be performed on the state.
 * @param {string} action.value - The value to update the state with.
 * @param {Function[]} action.validators - The validators to run against the new value.
 * @returns {Object} - The updated state of the input.
 */
const inputReducer = (state, action) => {
  switch (action.type){
    case 'UPDATE':
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value,action.validators)
      }
    case 'TOUCH':
      return {
        ...state,
        isTouched: true
      }
    default:
      return state
  }
};

/**
 * Custom input element with built in logic for validation in state management.
 * 
 * @param {string} [type='text'] - The type of input to return. Defaults to text.
 * @param {number} [rows=3] - The number of rows to render if the input is a textarea. Default is 3.
 * @param {string} [classes=''] - The CSS string to provide for the input component's className. Empty by default.
 * @param {string} [startingValue=''] - The starting value of the input. Empty by default.
 * @param {boolean} [startingValidity=false] - The value of the input's starting validity. False by default.
 * @param {string} [label=''] - The value of the label element. Empty by default. Does not render if empty.
 * @param {string} [placeholder=''] - The value of the placeholder to include in input. Empty by default.
 * @param {Function[]} [validators=[]] - The validators to run the value against upon change. Empty by default. Does not validate if empty.
 * @param {string} [errorText=''] - The value of the error text to provide if the input fails validation. Empty by default. Does not render if empty.
 * @param {Function} [onInput] - The input handler function which updates the state of the containing form. Console logs by default.
 * @param {string} id - The ID of the input.
 * @returns {JSX.Element} - The rendered Input component.
 */
const Input = ({
  type = 'text',
  rows = 3,
  classes = '',
  startingValue = '',
  startingValidity = false,
  label = '',
  placeholder = '',
  validators = [],
  errorText = '',
  onInput = (event) => console.log(event.target.value),
  id,
}) => {

  const [inputState, dispatch] = useReducer(inputReducer, { value: '', isTouched: false, isValid: startingValidity})

  const changeHandler = event => {
    dispatch({type:'UPDATE', value: event.target.value, validators})
  }

  const touchHandler = event => {
    dispatch({type:'TOUCH'})
  }

  const {value, isValid} = inputState

  useEffect(()=>{
    onInput(id, value, isValid)
  },[id, value, isValid, onInput])

  const inputElement = (type === 'area')
    ? <textarea className={classes} id={id} placeholder={placeholder} onChange={changeHandler} onTouch={touchHandler} rows={rows}/>
    : <input type={type} className={classes} id={id} placeholder={placeholder} onChange={changeHandler} onTouch={touchHandler}/>
  
  return (
    <>
    {label === '' ? '' : <label htmlFor={id}>{label}</label>}
    {inputElement}
    </>
  )
};

export default Input;