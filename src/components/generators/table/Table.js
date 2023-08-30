import React, { useCallback, useEffect, useReducer } from 'react';

import useTable from '../../../hooks/useTable';

import Input from '../../form/Input';
import Checkbox from '../../form/Checkbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../../../utils/icons';

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
      rollColumns: {
        isToggled: false
      },
      rollFormula: {
        value: '1d2',
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
          {id: 'C1', value: 'Unnamed Result 1', isValid: true},
          {id: 'C2', value: 'Unnamed Result 2', isValid: true}
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
          {id: 'C1', value: 'Unnamed Result 3', isValid: true},
          {id: 'C2', value: 'Unnamed Result 4', isvalid: true}
        ]
      }
    ],
    history: [],
    tableIsValid: false
  },
}) => {

  const [ tableState, changeHandler ] = useTable(tableData)

  const rollFormula  = tableState.config.rollFormula.value
  const tableColumns = tableState.columnTitles
  const tableEntries = tableState.entries


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
          <Input classes='actions__rollFormula' id={`${tableID}-rollFormula`} label="Table Roll Formula" placeholder='e.g: 3d6' onInput={changeHandler} startingValue={rollFormula} />
        </section>
        <section className='entries'>
          <table>
            <thead>
              <tr>
                <th className='col-xs'> </th>
                <th className='col-med'>{rollFormula}</th>
                <th className='col-sm'>Weight</th>
                {tableColumns.map((c,idx) =>
                  <th><Input classes='full center'size='4' maxLength='4'  key={`${tableID}-${c.id}`} id={`${tableID}-${c.id}`} startingValue={c.value} startingValiditiy={c.isValid} /></th>
                )}
                
              </tr>
              </thead>
              <tbody>
              {tableEntries.map((e, idx) =>
              <tr>
                <td className='col-xs'><FontAwesomeIcon icon={icons['bars']}/></td>
                <td className=''>
                  <Input classes='center' size='4' maxLength='4' key={`${tableID}-${e.id}min`} id={`${tableID}-${e.id}min`} startingValue={e.ranges[0].value} startingValidity={e.ranges[0].isValid}/>&nbsp;-&nbsp;
                  <Input classes='center' size='4' maxLength='4' key={`${tableID}-${e.id}max`} id={`${tableID}-${e.id}max`} startingValue={e.ranges[1].value} startingValidity={e.ranges[1].isValid}/>
                </td>
                <td className=''>
                  <Input classes='full center' className='full' key={`${tableID}-${e.id}weight`} id={`${tableID}-${e.id}weight`} startingValue={e.weight.value} startingValidity={e.weight.isValid}/>
                </td>
                {e.results.map((r, idx) =>
                  <td className='sz4'><Input classes='full' type="area" key={`${tableID}-${r.id}${e.id}`} id={`${tableID}-${r.id}${e.id}`} startingValue={r.value} startingValidity={r.isValid}/></td>
                )}
              </tr>
              )}
              </tbody>
          </table>
        </section>
      </form>
    </div>
    
  )
};

export default Table;