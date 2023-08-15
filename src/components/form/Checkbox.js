import React, {useReducer, useEffect} from 'react';

/**
 * Custom input element with built in logic for validation in state management.
 * 
 * @param {string} [classes=''] - The CSS string to provide for the input component's className. Empty by default.
 * @param {string} [startingChecked=false] - The starting toggle state of the input. Empty by default. Used for checkbox.
 * @param {string} [label=''] - The value of the label element. Empty by default. Does not render if empty.
 * @param {Function} [onInput] - The input handler function which updates the state of the containing form. Console logs by default.
 * @param {string} id - The ID of the input.
 * @returns {JSX.Element} - The rendered Input component.
 */
const Checkbox = ({
  classes = '',
  startingChecked = false,
  label = '',
  onInput = () => {},
  id,
}) => {

  const [checked, setIsChecked] = useState(startingChecked)

  const clickHandler = event => {
    setIsChecked(!checked)    
  }

  useEffect(()=>{
  },[checked])

  return (
    <>
      <input type='checkbox' className={classes} id={id} onChange={clickHandler} checked={isChecked}/>
      {label !== '' && type ==='checkbox' && <label className={classes} htmlFor={id}>{label}</label>}
    </>
  )
};

export default Input;