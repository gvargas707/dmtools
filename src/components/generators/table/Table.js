import React from 'react';

import './Table.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../../../utils/icons';

const Table = ({id}) => {

  return (
    <div className='generator-table'>
      <form className='generator-table__form'>
        <input className='generator-table__title' id={`title-${id}`} placeholder='Name' />
        <label className='generator-table__label generator-table__label--bold' htmlFor={`description-${id}`}>Description</label>
        <textarea className='generator-table__description' id={`description-${id}`} />
        <div className='generator-table__properties'>
          <input type='checkbox' id={`roll-columns-${id}`} />
          <label className='generator-table__label' htmlFor={`roll-columns-${id}`}>Roll Across Columns</label><FontAwesomeIcon icon={icons['circleQuestion']} />
        </div>
        <div className='generator-table__actions'>
          <div className='generator-table__roll-formula-container'>
            <label className='generator-table__label' htmlFor={`roll-formula-${id}`}>Table Roll Formula</label>
            <input className='generator-table__rollformula' id={`roll-formula-${id}`} type='text' placeholder='3d6+3'/><FontAwesomeIcon icon={icons['circleQuestion']} />
          </div>
          <div className='generator-table__column-actions-container'>
            <button className='generator-table__button btn-sm' title='Add Column'><FontAwesomeIcon icon={icons['circlePlus']}/></button>
          </div>
        </div>
        <table className='generator-table__table'>
          <tr>
            <th />
            <th className='col-md'>3d6+3<br/>Range</th>
            <th className='col-sm'>Weight</th>
            <th className='col-lg'><input className='generator-table__column-header' id={`c1-label-${id}`} placeholder='Column 1'/><FontAwesomeIcon className='generator-table__column-header__icon' icon={icons['circleMinus']}/></th>
            <th className='col-lg'><input className='generator-table__column-header' id={`c2-label-${id}`} placeholder='Column 2'/><FontAwesomeIcon className='generator-table__column-header__icon' icon={icons['circleMinus']}/></th>
            <th className='col-lg'><input className='generator-table__column-header' id={`c3-label-${id}`} placeholder='Column 3'/><FontAwesomeIcon className='generator-table__column-header__icon' icon={icons['circleMinus']}/></th>
            <th className='col-lg'><input className='generator-table__column-header' id={`c4-label-${id}`} placeholder='Column 4'/><FontAwesomeIcon className='generator-table__column-header__icon' icon={icons['circleMinus']}/></th>
            <th className='col-lg'><input className='generator-table__column-header' id={`c5-label-${id}`} placeholder='Column 5'/><FontAwesomeIcon className='generator-table__column-header__icon' icon={icons['circleMinus']}/></th>
            <th/>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={icons['bars']}/></td>
            <td className='col-md'>
              <input classname='generator-table__range' size='4' maxLength='4' id={`r1-min-${id}`}/> - <input classname='generator-table__range' size='4' maxLength='4' id={`r2-max-${id}`}/>
            </td>
            <td className='col-sm'><input className='generator-table__weight' size='6' maxLength='6' id={`r1-weight-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c1-result-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c2-result-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c3-result-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c4-result-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c5-result-${id}`} /></td>
            <td><FontAwesomeIcon icon={icons['trash']}/></td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={icons['bars']}/></td>
            <td className='col-md'>
              <input classname='generator-table__range' size='4' maxLength='4' id={`r1-min-${id}`}/> - <input classname='generator-table__range' size='4' maxLength='4' id={`r2-max-${id}`}/>
            </td>
            <td className='col-sm'><input className='generator-table__weight' size='6' maxLength='6' id={`r1-weight-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c1-result-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c2-result-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c3-result-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c4-result-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c5-result-${id}`} /></td>
            <td><FontAwesomeIcon icon={icons['trash']}/></td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={icons['bars']}/></td>
            <td className='col-md'>
              <input classname='generator-table__range' size='4' maxLength='4' id={`r1-min-${id}`}/> - <input classname='generator-table__range' size='4' maxLength='4' id={`r2-max-${id}`}/>
            </td>
            <td className='col-sm'><input className='generator-table__weight' size='6' maxLength='6' id={`r1-weight-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c1-result-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c2-result-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c3-result-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c4-result-${id}`} /></td>
            <td className='col-lg'><textarea className='generator-table__result' id={`r1-c5-result-${id}`} /></td>
            <td><FontAwesomeIcon icon={icons['trash']}/></td>
          </tr>
          <tr>
            <td colspan="9"><button className='generator-table__button'><FontAwesomeIcon icon={icons['circlePlus']} /></button></td>
          </tr>
        </table>
        <div className='generator-table__actions'>
          <button className='generator-table__actions__test-roll'>Sample Roll</button>
          <button className='generator-table__actions__save'>Save Table</button>
        </div>
      </form>
    </div>
  )
};

export default Table;