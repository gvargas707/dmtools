import React, { useCallback, useEffect, useReducer } from 'react';

import useTable from '../../../hooks/useTable';

import Input from '../../form/Input';
import Checkbox from '../../form/Checkbox';

import './Table.css'

const Table = ({
  tableID = 'default',
  tableData = {
    id: tableID,
    config: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      rollColumns: false,
      rollFormula: {
        valeu: '1d2',
        isValid: true
      },
    },
    columnTitles: [
      { id: 'C1', value: 'Unnamed Column 1', isValid: true},
      { id: 'C2', value: 'Unnamed Column 2', isValid: true}
    ],
    entries: [
      {
        id: 'R1',
        ranges: [
          {value: 1, isValid: true},
          {value: 1, isValid: true},
        ],
        weight: {value: 1, isValid: true},
        results: [
          {value: 'Unnamed Result 1', isValid: true},
          {value: 'Unnamed Result 2', isValid: true}
        ]
      },
      {
        id: 'R2',
        ranges: [
          {value: 2, isValid: true},
          {value: 2, isValid: true}
        ],
        weight: {value: 1, isValid: true},
        results: [
          {value: 'Unnamed Result 3', isValid: true},
          {value: 'Unnamed Result 4', isvalid: true}
        ]
      }
    ],
    history: [],
    tableIsValid: false
  },
  // tableData = {
  //   [`${tableID}Title`] : {
  //     value: '',
  //     isValid: false,
  //   },
  //   [`${tableID}Description`]: {
  //     value: '',
  //     isValid: false
  //   },
  //   [`${tableID}RollColumns`]: false,
  //   [`${tableID}RollFormula`]: {
  //     value: '1d1',
  //     isValid: true,
  //   },
  //   [`${tableID}ColumnTitles`]: [
  //     { [`${tableID}C1`]:{value: 'Unnamed Column 1', isValid: true}},
  //     { [`${tableID}C2`]:{value: 'Unnamed Column 2', isValid: true}}
  //   ],
  //   entries: [
  //     {
  //       ranges: [
  //         {value: 1, isValid: true},
  //         {value: 1, isValid: true},
  //       ],
  //       weight: {value: 1, isValid: true},
  //       results: [
  //         {value: 'Unnamed Result', isValid: true}
  //       ]
  //     },
  //   ],
  //   history: [],
  //   isValid: false
  // }
}) => {

  const [ tableState, changeHandler ] = useTable(tableData)

  // const rollFormula = tableState[`${tableID}RollFormula`].value
  // const tableColumns = tableState[`${tableID}ColumnTitles`]

  useEffect(() => {
    //console.log(tableState)
  }, [tableState])


  return (
    <div className='table-container'>
      <form>
        <Input classes='table-container__title' id={`${tableID}-title`} placeholder='Name' onInput={changeHandler} />
        <Input type='area' classes='table-container__description' id={`${tableID}-description`} label="Description" onInput={changeHandler}/>
        <section className='properties'>
          <Checkbox classes='properties__checkbox' id={`${tableID}-rollColumns`} label="Roll Across Columns" onInput={changeHandler}/>
        </section>
        <section className='actions'>
          <Input classes='actions__rollFormula' id={`${tableID}-rollFormula`} label="Table Roll Formula" placeholder='e.g: 3d6' onInput={changeHandler} startingValue='1d4' />
        </section>
        <section className='entries'>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>1d4</th>
                <th>Weight</th>
                {/* Iterate over columnTitles in state and create an Input object with the same ID as the key's name and the starting value of its value.
                {tableColumns && tableColumns.map((c, idx) => 
                  <th><Input id={Object.keys(c)[0]} startingValue={Object.values(c)[0].value} onInput={changeHandler}/></th>
                )} */}
              </tr>
            </thead>
          </table>
        </section>
      </form>
    </div>
    
  )
};

export default Table;