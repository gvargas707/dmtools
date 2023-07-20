import React, { useCallback, useReducer } from "react";

const formReducer = (state,action) => {
    switch (action.type){
      case 'change':
        let formIsValid = true;
        for (const input in state.inputs){
          if (!state.inputs[input]){
            continue;
          }
          if (input === action.input){
            formIsValid = formIsValid && action.isValid
          } else {
            formIsValid = formIsValid && state.inputs[input].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.input] : {value: action.value, isValid: action.isValid}
          },
          isValid: formIsValid
        }
      case 'touch':
        console.log(state)
      default:
        return state
    }
}

const useForm = (initialInputs, initialFormValidity) => {
  const [inputStates, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity
  })

  const changeHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'change',
      value,
      isValid,
      input: id
    })
  }, []);

  return [inputStates, changeHandler]
}

export default useForm;