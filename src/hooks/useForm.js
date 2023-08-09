import React, { useCallback, useReducer } from "react";

const formReducer = (state,action) => {
    switch (action.type){
      case 'UPDATE':
        return state
        
      case 'TOUCH':
        return state
      default:
        return state
    }
}

/**
 * Custom hook to manage form inputs and overall form validity.
 * 
 * @param {Object[]} inputs - An array containing inputs as objects.
 * @param {string} inputs[].input - The name or ID of the input.
 * @param {string} inputs[].value - The value of the input
 * @param {boolean} inputs[].isValid - The valid state of the input.
 * @param {boolean} isFormValid - Indicates whether the entire form is valid or not. (false unless all containing inputs.isValid is true)
 * @returns {[Object, function]} - Contains the state of the form and a function for managing that state from other components.
 */

const useForm = (
  inputs,
  isFormValid = false
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

  return [inputStates, changeHandler]
}

export default useForm;