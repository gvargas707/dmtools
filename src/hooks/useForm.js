import React, { useCallback, useReducer } from "react";

/**
 * Reducer function to manage the state of the component.
 * 
 * @param {Object} state - The current state of the form
 * @param {Object} action - The action to be performed on the form
 * @param {string} action.type - The type of action to perform on the state.
 * @param {Object} action.payload - The object containing the new state to apply.
 * @param {string} action.payload.input - The input to apply the update to.
 * @param {string} action.payload.value - The value of the updated input.
 * @param {string} action.payload.isValid - The validity of the new value post-validated.
 * @returns {Object} - The updated state of the form.
 */
const formReducer = (state,action) => {
    switch (action.type){
      case 'UPDATE':
        let formIsValid = true
        for (let input in state.inputs){
          if (!state.inputs[input]){
            continue;
          }
          // If current input is equal to the payload input
          if (input === action.payload.input){
            // ...use payload's isValid value
            formIsValid = formIsValid && action.payload.isValid
          } else {
            // ...otherwise use the state input's isValid value
            formIsValid = formIsValid && state.inputs[input].isValid
          }
        }
        return {
          //Return full state
          ...state,
          //overwrite inputs
          inputs:{
            //Return full inputs
            ...state.inputs,
            //overwrite payload's input with payloads values and validity
            [action.payload.input]: {value: action.payload.value, isValid: action.payload.isValid}
          },
          //overwrite form validity after checks
          isFormValid: formIsValid
        }
      case 'TOGGLE':
        return {
          ...state,
          inputs:{
            ...state.inputs,
            [action.payload.input]: {isChecked: action.payload.isChecked}
          }
        }
      default:
        return state
    }
}

/**
 * @typedef InputObject
 * @property {string} input - The name or ID of the input.
 * @property {string} value - The value of the input.
 * @property {boolean} isValid - The valid state of the input.
*/

/**
 * Custom hook to manage form inputs and overall form validity.
 * 
 * @param {Object.<InputObject>} inputs - An array containing inputs as objects.
 * @param {boolean} inputs.isValid - The valid state of the input.
 * @param {boolean} isFormValid - Indicates whether the entire form is valid or not. (false unless all containing inputs.isValid is true)
 * @returns {[Object, function]} - Contains the state of the form and a function for managing that state from other components.
 */
const useForm = (
  {
    inputs,
    isFormValid = false
  }
) => {
  const [inputStates, dispatch] = useReducer(formReducer, {
    inputs,
    isFormValid
  })

  const changeHandler = useCallback((id, value, isValid) => {
    dispatch(
      {
        type: 'UPDATE',
        payload: {
          input: id,
          value,
          isValid
        }
      }
    )
  }, []);

  const toggleHandler = useCallback((id, isChecked) => {
    dispatch(
      {
        type: 'TOGGLE',
        payload: {
          input: id,
          isChecked,
        }
      }
    )
  }, []);


  return [inputStates, changeHandler, toggleHandler]
}

export default useForm;