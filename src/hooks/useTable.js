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
  console.log(action)
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
    // dispatch({
    //   type: 'UPDATE_CONFIG',
    //   input: stateId,
    //   payload: {
    //     value,
    //     isValid,
    //     isToggled: isChecked
    //   }
    // })
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