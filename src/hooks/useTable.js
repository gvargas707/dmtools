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
      console.log(`id: ${id}`)
      console.log(`position: ${position}`)
      // console.log(state.entries)
      // console.log(action)
      const updatedEntryRange = state.entries
      .map(entry => {
        if (entry.id === id) {
          return {
            value : action.payload.value,
            isValid: action.payload.isValid
          }
        }
        return entry
      })
      const updatedEntry = {

      }
      // return {
      //   ...state,
      //   entries: state.entries.map((entry) => entry.id === id ? updatedEntryRange : entry)
      // }
      console.log(updatedEntryRange)
      console.log('Computed State:')
      console.log({
          ...state,
          entries: state.entries.map((entry) => entry.id === id ? updatedEntryRange : entry)
        })
      console.log('Computed State END')
      console.log('Actual State:')
      console.log(state)
      console.log('Actual State END')
      return state;
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


  // const entryRangeHandler = useCallback((input => {
  //   const {stateId, value, isValid} = input
  //   dispatch({
  //     type: 'UPDATE_ENRTY_RANGE',
  //     input: stateId,
  //     payload: {value, isValid}
  //   })
  // },[]))


  return [tableState, changeHandler, columnTitleHandler, entryRangeHandler]
}

export default useTable;