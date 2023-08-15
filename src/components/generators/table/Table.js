import React, { useEffect, useReducer } from 'react';

import useForm from '../../../hooks/useForm';

import Input from '../../form/Input';
import Checkbox from '../../form/Checkbox';
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

  const [tableState, changeHandler, toggleHandler] = useForm(
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
        value: '1d6',
        isValid: false
      },
      rollFormula: {
        value: '',
        isValid: true,
      }
    },
    false
  )

  

  // try {
  //   const rollFormula = tableState && tableState[`${tableID}rollFormula`].value;
  // } catch (error) {
  //   console.log(error)
  //   console.log(tableState[`${tableID}rollFormula`].value)
  // }

  //const rollFormula = tableState.inputs && tableState[`${tableID}rollFormula`].value;
  //const rollFormula = tableState[`inputs`][`${tableID}rollFormula`] ? tableState.inputs[`${tableID}rollFormula`].value : undefined;

  // if (tableState.inputs && tableState.inputs[`${tableID}rollFormula`]){
  //   const rollFormula = tableState.inputs[`${tableID}rollFormula`].value
  // }


  //const rollFormula = tableState.inputs && tableState.inputs.rollFormula ? tableState.inputs.rollFormula.value : '';
  const rollFormula = tableState.inputs && tableState.inputs[`${tableID}rollFormula`] ? tableState.inputs[`${tableID}rollFormula`].value : '';

  useEffect(() => {
    console.log(tableState)
  }, [tableState])


  return (
    <div className='table-container'>
      <form>
        <Input classes='table-container__title' id={`${tableID}Title`} placeholder='Name' onInput={changeHandler}/>
        <Input type='area' classes='table-container__description' id={`${tableID}Description`} label="Description" onInput={changeHandler}/>
        <div className='properties'>
          <Checkbox classes='properties__checkbox' id={`${tableID}RollColumns`} label="Roll Across Columns" onInput={toggleHandler}/>
        </div>
        <div className='actions'>
          <Input classes='actions__rollFormula' id={`${tableID}rollFormula`} label="Table Roll Formula" placeholder='e.g: 3d6' startingValue='1d8' onInput={changeHandler}/>
        </div>
        <div className='entries'>
          <table>
            <thead>
              <tr>
                {/* <th>{rollFormula}<br/>Range</th> */}
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