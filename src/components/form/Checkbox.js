import React, {useState, useEffect} from 'react';

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

  const [isChecked, setIsChecked] = useState(startingChecked)

  const clickHandler = event => {
    setIsChecked(!isChecked)    
  }

  const extractId = (id) => {
    const IdSections = id.split('-');
    return IdSections.length > 1 ? IdSections[1] : id;
  }
  useEffect(()=>{
    const stateId = extractId(id)
    console.log(stateId)
    onInput({
      stateId,
      isChecked,
      type: 'checkbox'
    })
  },[id, isChecked])

  return (
    <>
      <input type='checkbox' className={classes} id={id} onChange={clickHandler} checked={isChecked}/>
      {label !== '' && <label className={classes} htmlFor={id}>{label}</label>}
    </>
  )
};

export default Checkbox;