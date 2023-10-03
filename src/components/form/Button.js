import React from 'react';

import './Button.css';

/**
 * A button with built-in logic for easier implementation in JSX.
 * 
 * @param {boolean} [disabled=false] - The enabled/disabled state of the button. 
 * @param {string} [label='Submit'] - The label of the button.
 * @param {string} [classes=''] - 
 */
const Button = ({
  disabled = false,
  label = 'Submit',
  classes = '',
  onClick = (() => {console.log('Test')}),
  children
}) => {
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>{children || label}</button>
  )
};

export default Button;