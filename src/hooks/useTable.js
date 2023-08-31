import React, { useReducer, useCallback } from 'react';

const checkIsValid = (obj, action) => {

  if (typeof obj !== 'object' || obj === null){
    return true;
  }

  if (obj.hasOwnProperty('isValid') && !obj.isValid){
    return false;
  }

  for (let item in obj){
    if (action && action.payload.hasOwnProperty('isValid') && Object.keys(obj).includes(action.input)){
      return action.payload.isValid
    }
    if (!checkIsValid(obj[item], action)){
      return false;
    }
  }

  return true
}


const tableReducer = (state, action) => {
  let tableIsValid = checkIsValid(state, action)
  switch (action.type) {
    case 'UPDATE':
      //return state
    case 'UPDATE_CONFIG':
      return {
        ...state,
        config: {
          ...state.config,
          [action.input] : {...action.payload}
        },
        columnTitles: [
          ...state.columnTitles
        ],
        entries: [
          ...state.entries
        ],
        tableIsValid
      }
    case 'UPDATE_COLUMN_TITLE':
      const updatedColumnTitles = state.columnTitles.map(column => {
        if (column.id === action.input) {
          return {
            id: action.input,
            value: action.payload.value,
            isvalid: action.payload.isValid
          };
        }
        return column
      })
      return {
        ...state,
        columnTitles: updatedColumnTitles,
        tableIsValid
      }
    default:
      return state;
  }
};

export const useTable = ( tableData ) => {

  const [tableState, dispatch] = useReducer(tableReducer, tableData)

  const changeHandler = useCallback((input) => {
    const {stateId, value, isValid, isChecked} = input
    const properties = {value,isValid,isChecked}
    const payload = {}
    //Add properties that have a defined value into payload, ignore undefined/null
    for (let property in properties){
      if (properties[property] !== undefined){
        payload[property] = properties[property]
      }
    }
    dispatch({
      type: 'UPDATE_CONFIG',
      input: stateId,
      payload
    })
  },[])

  const columnTitleHandler = useCallback((input) => {
    const {stateId, value, isValid} = input
    dispatch({
      type: 'UPDATE_COLUMN_TITLE',
      input: stateId,
      payload: {value, isValid}
    })
  }, [])

  return [tableState, changeHandler, columnTitleHandler]
}

export default useTable;