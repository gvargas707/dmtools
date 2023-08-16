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
    title: '',
    description: '',
    properties: {
      rollColumns: false,
    },
    rollFormula: '1d1',
    columnTitles: ['Unnamed Column'],
    entries: [
      {
        ranges: [1,1],
        weight: 1,
        columns: ['Unnamed Result']
      }
    ]
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

  const inputHandler = (event) => {
    changeHandler
  }

  //const rollFormula = inputStates.inputs && inputStates.inputs[`${tableID}rollFormula`] ? inputStates.inputs[`${tableID}rollFormula`].value : '';
  const { rollFormula } = tableState

  useEffect(() => {
    console.log(inputStates)
  }, [inputStates])


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