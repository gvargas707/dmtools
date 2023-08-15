import React, { useEffect, useReducer } from 'react';

import useForm from '../../../hooks/useForm';

import Input from '../../form/Input';
import Button from '../../form/Button';

import './Table.css'

const Table = ({
  tableID = 'default'
}) => {

  // [tableState, dispatch] = useReducer(tableReducer, {
  //   tableColumns: 1,
  //   tableRows: 1,
  //   rollColumns: false,
  //   tableData: {}
  // })

  const [tableState, changeHandler] = useForm(
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

  useEffect(() =>{
    console.log(tableState)
  },[tableState])
  //const rollFormula = tableState.defaultRollFormula.value;

  return (
    <div className='table-container'>
      <form>
        <Input classes='table-container__title' id={`${tableID}Title`} placeholder='Name' onInput={changeHandler}/>
        <Input type='area' classes='table-container__description' id={`${tableID}Description`} label="Description" onInput={changeHandler}/>
        <div className='properties'>
          <Input classes='properties__checkbox' type='checkbox' id={`${tableID}RollColumns`} label="Roll Across Columns" onInput={changeHandler}/>
        </div>
        <div className='actions'>
          <Input classes='actions__rollFormula' id={`${tableID}RollFormula`} label="Table Roll Formula" placeholder='e.g: 3d6' onInput={changeHandler}/>
        </div>
        <div className='entries'>
          <table>
            <thead>
              <tr>
                {/* <th>{rollFormula}<br/>Range</th> */}
                <th>1d6<br/>Range</th>
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