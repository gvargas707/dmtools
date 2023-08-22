import React, { useReducer, useCallback } from 'react';


const tableReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIXED':
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
    if (type !== 'checkbox'){
      dispatch({
        type: 'UPDATE_FIXED',
        payload: {
          input: id,
          value,
          isValid
        }
      })
    }
    if (type === 'checkbox'){
      dispatch({
        type: 'UPDATE_PROPERTIES',
        payload: {
          input: id,
          isChecked
        }
      })
    }
  },[])

  return [tableState, changeHandler]
}

export default useTable;