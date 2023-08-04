import React, { useState } from 'react';

const TableRoller = ({id, tables}) => {
  return (
    <div>
      <select>
        {tables.map((t, index) => <option key={`${id}-${index}`}>{t.table}</option>)}
      </select>
    </div>
  )
};

export default TableRoller