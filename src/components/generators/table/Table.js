import React, { useEffect, useReducer } from 'react';

import useForm from '../../../hooks/useForm';

import Input from '../../form/Input';
import Checkbox from '../../form/Checkbox';
import Button from '../../form/Button';

import './Table.css'


const tableReducer = (state, action) => {
  switch (action){
    default:
      return state
  }
}

const Table = ({
  tableID = 'default',
  tableData = {
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
  }
}) => {

  const [tableState, dispatch] = useReducer(tableReducer, tableData)

  const [inputStates, changeHandler, toggleHandler] = useForm(
    {
      [`${tableID}title`]: {
        value: '',
        isValid: false
      },
      [`${tableID}description`]: {
        value: '',
        isValid: false
      },
      [`${tableID}rollColumns`]: {
        isChecked: false
      },
      [`${tableID}rollFormula`]: {
        value: '',
        isValid: false
      },
    },
    false
  )

  //const rollFormula = inputStates.inputs && inputStates.inputs[`${tableID}rollFormula`] ? inputStates.inputs[`${tableID}rollFormula`].value : '';
  const { rollFormula } = tableState

  useEffect(() => {
    console.log(inputStates)
  }, [inputStates.inputs])


  return (
    <div className='table-container'>
      <form>
        <Input classes='table-container__title' id={`${tableID}Title`} placeholder='Name' onInput={changeHandler} />
        <Input type='area' classes='table-container__description' id={`${tableID}Description`} label="Description" onInput={changeHandler}/>
        <div className='properties'>
          <Checkbox classes='properties__checkbox' id={`${tableID}RollColumns`} label="Roll Across Columns" onInput={toggleHandler}/>
        </div>
        <div className='actions'>
          <Input classes='actions__rollFormula' id={`${tableID}rollFormula`} label="Table Roll Formula" placeholder='e.g: 3d6' onInput={changeHandler} startingValue={rollFormula}/>
        </div>
        <div className='entries'>
          <table>
            <thead>
              <tr>
                <th>{rollFormula}</th>
                <th>Weight</th>
              </tr>
            </thead>
          </table>
        </div>
      </form>
    </div>
    
  )
};

export default Table;