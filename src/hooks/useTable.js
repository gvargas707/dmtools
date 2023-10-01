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
    case 'UPDATE_ENTRY_RANGE':
      const [id, position] = action.input.split(':')
      const updatedEntryRange = {
        ...state.entries.filter(entry => entry.id === id)[0],
        [`${position}`]: {value: action.payload.value, isValid: action.payload.isValid}
      }
      return {
        ...state,
        entries: state.entries.map((entry) => entry.id === id ? updatedEntryRange : entry)
      }
    case 'UPDATE_WEIGHT':
      const weightId = action.input.substring(0, 2)
      const updatedWeight = {
        ...state.entries.filter(entry => entry.id === weightId)[0],
        weight: {value: action.payload.value, isValid: action.payload.isValid }
      }
      return {
        ...state,
        entries: state.entries.map((entry) => entry.id === weightId ? updatedWeight : entry)
      };
    case 'UPDATE_RESULT':
      const [entryCol, entryRow] = action.input.split(':')
      return {
        ...state,
        entries: state.entries.map(entry => entry.id === entryRow
        ? {...entry, results: entry.results.map(result => result.id === entryCol ? {...result, value: action.payload.value, isValid: action.payload.isValid} : result)}
        : entry)
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

  const entryRangeHandler = useCallback((input) => {
    const {stateId, value, isValid} = input
    dispatch({
      type: 'UPDATE_ENTRY_RANGE',
      input: stateId,
      payload: {value, isValid}
    })
  }, [])

  const entryWeightHandler = useCallback((input) => {
    const {stateId, value, isValid} = input
    dispatch({
      type: 'UPDATE_WEIGHT',
      input: stateId,
      payload: {value, isValid}
    })
  }, [])

  const entryResultHandler = useCallback((input) => {
    const {stateId, value, isValid} = input
    dispatch({
      type: 'UPDATE_RESULT',
      input: stateId,
      payload: {value, isValid}
    })
  }, [])

  return [tableState, changeHandler, columnTitleHandler, entryRangeHandler, entryWeightHandler, entryResultHandler]
}

export default useTable;