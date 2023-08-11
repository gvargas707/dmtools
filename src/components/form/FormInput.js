import React, { useReducer, useEffect } from 'react';

import { validate } from '../../utils/validators';
import './FormInput.css';

/**
 * FormInput
 * 
 * This component generates a form element for inputs complete with a container
 * and accompanying elements commonly seen with an input. Considerations have
 * been made to include. It accepts the following props:
 * - inputArea: A boolean value which defaults to false if no truthy value is provided.
 *              If false: The component is a normal 'text' input.
 *              If true: The component is a 'textarea'.
 * - type: The input type to render: 'text', 'number', 'password', 'email', or 'file'.
 * - id: The id property of the input.
 * - classes: Classes to append to the className.
 * - label: Contents of the label
 * - placeholder: Placeholder text to display when the input is empty.
 * - validators: List of validators with which to valdiate input.
 * - errorText: Error text to display when the input fails validation.
 * - onInput: Update function to pass to the component.
 * - initialValue: Initial value of the component on render.
 * 
 * @param {Object} props The properties passed to this component. 
 * @returns {JSX.Element} A JSX element representing an input element.
 */

const FormInput = ({
  inputArea = false,
  type = 'text',
  id,
  classes = '',
  label,
  placeholder = '',
  validators,
  errorText,
  onInput,
  initialValue,
  initialValidity
}) => {
  //input Reducer function to track state and define dispatch actions
  const inputReducer = (state, action) => {
    switch (action.type){
      case 'change':
        return {
          ...state,
          value: action.value,
          isValid: validate(action.value, action.validators)
        };
      case 'touch':
        return {
          ...state,
          isTouched: true
        }
      default:
        return state
    }
  }

  //Reducer instantiation. Tracks the value, isTouched, and isValid states
  const [inputState, dispatch] = useReducer(inputReducer, 
    {
      value: initialValue || '',
      isTouched: false,
      isValid: initialValidity || false
    })

    const changeHandler = (evt) => {
      dispatch({
        type: 'change',
        value: evt.target.value,
        validators: validators
      })
    }

    // const { id, onInput } = props;
    const { value, isValid } = inputState;

     useEffect(() => {
       onInput(id, value, isValid)   
     }, [id, value, isValid, onInput])

    const touchHandler = () => {
      dispatch({
        type: 'touch'
      })
    }

  return (
    <div className={`input-container ${!inputState.isValid && inputState.touched && 'input-invalid'}`}>
      {label === '' ? '' : <label htmlFor={id}>{label}</label>}
      {inputArea
        ? <textarea className={`area-input ${classes}`} id={id} placeholder={placeholder} onChange={changeHandler} />
        : <input className={`${type}-input ${classes}`} id={id} type={type} placeholder={placeholder} onChange={changeHandler} />
      }
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default FormInput