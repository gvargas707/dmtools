import React, { useCallback, useEffect, useReducer } from 'react';

import useForm from '../../../hooks/useForm';
import useTable from '../../../hooks/useTable';

import Input from '../../form/Input';
import Checkbox from '../../form/Checkbox';
import Button from '../../form/Button';

import './Table.css'

const Table = ({
  tableID = 'default',
  tableData = {
    [`${tableID}Title`] : {
      value: '',
      isValid: false,
    },
    [`${tableID}Description`]: {
      value: '',
      isValid: false
    },
    [`${tableID}RollColumns`]: false,
    [`${tableID}RollFormula`]: {
      value: '1d1',
      isValid: true,
    },
    [`${tableID}ColumnTitles`]: [
      { [`${tableID}C1`]:{value: 'Unnamed Column', isValid: true}}
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

  // const [tableState, dispatch] = useReducer(tableReducer, tableData)

  // const [inputStates, changeHandler, toggleHandler] = useForm(
  //   {
  //     [`${tableID}title`]: {
  //       value: '',
  //       isValid: false
  //     },
  //     [`${tableID}description`]: {
  //       value: '',
  //       isValid: false
  //     },
  //     [`${tableID}rollColumns`]: {
  //       isChecked: false
  //     },
  //     [`${tableID}rollFormula`]: {
  //       value: '',
  //       isValid: false
  //     },
  //   },
  //   false
  // )

  //const rollFormula = inputStates.inputs && inputStates.inputs[`${tableID}rollFormula`] ? inputStates.inputs[`${tableID}rollFormula`].value : '';

  const [ tableState, changeHandler ] = useTable(tableData)

  const rollFormula = tableState[`${tableID}RollFormula`].value
  const tableColumns = tableState[`${tableID}ColumnTitles`]

  useEffect(() => {
  }, [tableState])


  return (
    <div className='table-container'>
      <form>
        <Input classes='table-container__title' id={`${tableID}Title`} placeholder='Name' onInput={changeHandler} />
        <Input type='area' classes='table-container__description' id={`${tableID}Description`} label="Description" onInput={changeHandler}/>
        <div className='properties'>
          <Checkbox classes='properties__checkbox' id={`${tableID}RollColumns`} label="Roll Across Columns" onInput={changeHandler}/>
        </div>
        <div className='actions'>
          <Input classes='actions__rollFormula' id={`${tableID}RollFormula`} label="Table Roll Formula" placeholder='e.g: 3d6' onInput={changeHandler} startingValue={rollFormula} />
        </div>
        <div className='entries'>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>{rollFormula}</th>
                <th>Weight</th>
                {/* {tableColumns && tableColumns.map((c, idx) => <th><Input id={c.keys[0]} startingvalue={c.value} startingValidity={c.isValid} /></th>)} */}
                {tableColumns && tableColumns.map((c, idx) => console.log(c))}
              </tr>
            </thead>
          </table>
        </div>
      </form>
    </div>
    
  )
};

export default Table;