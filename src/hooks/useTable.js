import React, { useReducer, useCallback } from 'react';

const checkIsValid = (obj) => {
  if (typeof obj !== 'object' || obj === null){
    return true;
  }

  if (obj.hasOwnProperty('isValid') && !obj.isValid){
    return false;
  }

  for (let item in obj){
    if (!checkIsValid(obj[item])){
      return false;
    }
  }

  return true
}

const tableReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      let isTableValid = true
      //console.log(state)
      console.log(action)
      // console.log('----------')
      // for (let item in state){
      //   console.log(`${item}: ${typeof state[item]}`)
      //   //isTableValid = isTableValid && checkIsValid(state[item])
      // }
      // console.log('----------')
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
    const {id, value, isValid, isChecked, type} = input
    dispatch({
      type: 'UPDATE',
      payload: {
        input: id,
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