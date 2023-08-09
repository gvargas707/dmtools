import React, { useReducer, useCallback } from 'react';

const tableReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      }
    case 'UPDATE':
      return {
        ...state,
        ...action.payload
      }
    case 'DELETE_ROW':
      return {
        ...state,
        entries: state.entries.filter((e,index) => action.payload !== index)
      }
    case 'DELETE_COLUMN':
      for (let i = 0; i < state.entries.length ; i++) {
        if (state.entries[0]?.columns.length == 1){
          return state;
        }
      }
      
      return {
        ...state,
        entries: state.entries.map(e => ({
          ...e,
          columns: e.columns.slice(0,e.columns.length-1)
        }))
      }
    default:
      return state;
  }
};

export const useTable = (table) => {

  const [tableState, dispatch] = useReducer(tableReducer, {
    title: table.title || '',
    description: table.description || '',
    properties: table.properties || {
      rollColumns: false,
    },
    rollFormula: table.rollFormula || '',
    entries: table.entries || [
      {
        ranges: [],
        weight: 0,
        columns: ['']
      }
    ],
    history: []
  })

  const inputHandler = useCallback((event) => {
    dispatch({
      type: 'UPDATE',
      payload: {
        [event.target.id] : event.target.value
      }
    })
  })

  const checkHandler = useCallback((event => {
    dispatch({
      type: 'UPDATE',
      payload: {
        properties: {
          [event.target.id] : event.target.checked
        }
      }
    })
  }))




  return [tableState, inputHandler, checkHandler]
}