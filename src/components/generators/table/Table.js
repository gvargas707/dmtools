import React from 'react';

import useForm from '../../../hooks/useForm';

import Input from '../../form/Input';
import Button from '../../form/Button';

import './Table.css'

const Table = ({
  tableID = 'default'
}) => {

  return (
    <div className='table-container'>
      <form>
        <Input classes='table-container__title' id={`${tableID}-title`} placeholder='Name'/>
        <Input type='area' classes='table-container__description' id={`${tableID}-description`} label="Description" />
        <div className='properties'>
          <Input classes='properties__checkbox' type='checkbox' id={`${tableID}-rollColumns`} label="Roll Across Columns" />
        </div>
        <div className='actions'>
          <Input classes='actions__rollFormula' id={`${tableID}-rollFormula`} label="Table Roll Formula" placeholder='e.g: 3d6'/>
        </div>
        <div className='entries'>
        </div>
      </form>
    </div>
    
  )
};

export default Table;