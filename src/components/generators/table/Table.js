import React from 'react';

import './Table.css';

const Table = ({id}) => {

  return (
    <div className='generator-table'>
      <form className='generator-table__form'>
        <input className='generator-table__title' id={`title-${id}`} placeholder="Table Name" />
        <textarea className='generator-table__description' id={`description-${id}`} rows="3" placeholder="Table Description"></textarea>
        <div className='generator-table__properties'>
          <label className='generator-table__roll-label' htmlFor={`roll-formula-${id}`}>Table Roll Formula</label>
          <input classname='generator-table__roll-input' id={`roll-formula-${id}`} placeholder='3d6'/>
        </div>
        <table className='generator-table__table' id={``}>
          <tr>
            <th colspan="2">2d6</th><th rowspan="2">Weight</th><th rowspan="2">Result Column 1</th><th rowspan="2">Result Column 2</th><th rowspan="2">Result Column 3</th>
          </tr>
          <tr>
            <th colspan="2">Range</th>
          </tr>
          <tr>
            <td>
              <input className='generator-table__range-cell' id={`r1-min-${id}`} placeholder="1" maxLength="6"/>
            </td>
            <td>
              <input className='generator-table__range-cell' id={`r1-max-${id}`} placeholder="2" maxLength="6"/>
            </td>
            <td>
              <input className='generator-table__weight-cell' id={`r1-weight-${id}`} placeholder="4" maxLength="6"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r1-c1-result-${id}`} rows="1"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r1-c2-result-${id}`} rows="1"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r1-c3-result-${id}`} rows="1"/>
            </td>
          </tr>
          <tr>
            <td>
              <input className='generator-table__range-cell' id={`r2-min-${id}`} placeholder="3" maxLength="6"/>
            </td>
            <td>
              <input className='generator-table__range-cell' id={`r2-max-${id}`} placeholder="4" maxLength="6"/>
            </td>
            <td>
              <input className='generator-table__weight-cell' id={`r2-weight-${id}`} placeholder="6" maxLength="6"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r2-c1-result-${id}`} rows="1"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r2-c2-result-${id}`} rows="1"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r2-c3-result-${id}`} rows="1"/>
            </td>
          </tr>
          <tr>
            <td>
              <input className='generator-table__range-cell' id={`r3-min-${id}`} placeholder="5" maxLength="6"/>
            </td>
            <td>
              <input className='generator-table__range-cell' id={`r3-max-${id}`} placeholder="6" maxLength="6"/>
            </td>
            <td>
              <input className='generator-table__weight-cell' id={`r3-weight-${id}`} placeholder="8" maxLength="6"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r3-c1-result-${id}`} rows="1"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r3-c2-result-${id}`} rows="1"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r3-c3-result-${id}`} rows="1"/>
            </td>
          </tr>
          <tr>
            <td>
              <input className='generator-table__range-cell' id={`r4-min-${id}`} placeholder="7" maxLength="6"/>
            </td>
            <td>
              <input className='generator-table__range-cell' id={`r4-max-${id}`} placeholder="8" maxLength="6"/>
            </td>
            <td>
              <input className='generator-table__weight-cell' id={`r4-weight-${id}`} placeholder="8" maxLength="6"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r4-c1-result-${id}`} rows="1"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r4-c2-result-${id}`} rows="1"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r4-c3-result-${id}`} rows="1"/>
            </td>
          </tr>
          <tr>
            <td>
              <input className='generator-table__range-cell' id={`r5-min-${id}`} placeholder="9" maxLength="6"/>
            </td>
            <td>
              <input className='generator-table__range-cell' id={`r5-max-${id}`} placeholder="10" maxLength="6"/>
            </td>
            <td>
              <input className='generator-table__weight-cell' id={`r5-weight-${id}`} placeholder="12" maxLength="6"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r5-c1-result-${id}`} rows="1"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r5-c2-result-${id}`} rows="1"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r5-c3-result-${id}`} rows="1"/>
            </td>
          </tr>
          <tr>
            <td>
              <input className='generator-table__range-cell' id={`r6-min-${id}`} placeholder="11" maxLength="6"/>
            </td>
            <td>
              <input className='generator-table__range-cell' id={`r6-max-${id}`} placeholder="12" maxLength="6"/>
            </td>
            <td>
              <input className='generator-table__weight-cell' id={`r6-weight-${id}`} placeholder="14" maxLength="6"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r6-c1-result-${id}`} rows="1"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r6-c2-result-${id}`} rows="1"/>
            </td>
            <td>
              <textarea className='generator-table__result-cell' id={`r6-c3-result-${id}`} rows="1"/>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
};

export default Table;