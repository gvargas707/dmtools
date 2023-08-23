import React, { useReducer, useCallback } from 'react';

const checkIsValid = (obj, payload) => {

  if (typeof obj !== 'object' || obj === null){
    return true;
  }

  if (obj.hasOwnProperty('isValid') && !obj.isValid){
    return false;
  }

  for (let item in obj){
    if (payload && payload.hasOwnProperty('isValid') && Object.keys(obj).includes(payload.input)){
      return payload.isValid
    }
    if (!checkIsValid(obj[item], payload)){
      return false;
    }
  }

  return true
}

const tableReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      let updatedState = state
      // if (action.payload.hasOwnProperty('isValid')){
      //   let isTableValid = true
      //   isTableValid = checkIsValid(state,action.payload)

      // }
      // if (action.payload.hasOwnProperty('isChecked')){

      // }


      // return {
      //   ...state,
      //   config: {
      //     ...state.config,
      //     [action.payload.input] : {
            
      //     }
      //   }
      // }
      return state
    case 'UPDATE_FIXED':
      console.log(action)
      return {
        ...state,
        [action.payload.input] : {value: action.payload.value, isValid: action.payload.isValid}
      }
    case 'UPDATE_PROPERTIES':
      return {
        ...state,
        [action.payload.input] : action.payload.isChecked
      }
    default:
      return state;
  }
};

export const useTable = ( tableData ) => {

  const [tableState, dispatch] = useReducer(tableReducer, tableData)

  const changeHandler = useCallback((input) => {
    const {stateId, value, isValid, isChecked, type} = input
    dispatch({
      type: 'UPDATE',
      payload: {
        input: stateId,
        value,
        isValid,
        isChecked,
        type
      }
    })
    // if (type !== 'checkbox'){
    //   dispatch({
    //     type: 'UPDATE_FIXED',
    //     payload: {
    //       input: id,
    //       value,
    //       isValid
    //     }
    //   })
    // }
    // if (type === 'checkbox'){
    //   dispatch({
    //     type: 'UPDATE_PROPERTIES',
    //     payload: {
    //       input: id,
    //       isChecked
    //     }
    //   })
    // }
  },[])

  return [tableState, changeHandler]
}

export default useTable;