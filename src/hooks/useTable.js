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
        properties: {
          ...state.properties,
          [action.payload.input] : action.payload.isChecked
        }
      }
    default:
      return state;
  }
};

export const useTable = ( tableData = {
  title : {
    value: '',
    isValid: false,
  },
  description: {
    value: '',
    isValid: false
  },
  properties: {
    rollColumns: false,
  },
  rollFormula: {
    value: '1d1',
    isValid: true,
  },
  columnTitles: [
    {value: 'Unnamed Column', isValid: true}
  ],
  entries: [
    {
      ranges: [
        {value: 1, isValid: true},
        {value: 1, isValid: true},
      ],
      weight: {value: 1, isValid: true},
      results: [
        {value: 'Unnamed Result', isValid: true}
      ]
    },
  ],
  history: [],
  isValid: false
}) => {

  const [tableState, dispatch] = useReducer(tableReducer, tableData)

  const changeHandler = useCallback(({id, value, isValid, isChecked} = {}) => {
    if (id !== 'properties'){
      dispatch({
        type: 'UPDATE_FIXED',
        payload: {
          input: id,
          value,
          isValid
        }
      })
    }
    if (id === 'properties'){
      dispatch({
        type: 'UPDATE_PROPERTIES',
        payload: {
          input: id,
          isChecked
        }
      })
    }
  })

  // const inputHandler = useCallback((event) => {
  //   dispatch({
  //     type: 'UPDATE',
  //     payload: {
  //       [event.target.id] : event.target.value
  //     }
  //   })
  // })

  // const checkHandler = useCallback((event => {
  //   dispatch({
  //     type: 'UPDATE',
  //     payload: {
  //       properties: {
  //         [event.target.id] : event.target.checked
  //       }
  //     }
  //   })
  // }))

  return [tableState, inputHandler]
}