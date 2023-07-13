//validation constants
//These constants have a string representation. We use variables names instead of static strings so we can more easily
//reference them in code.
const VALIDATOR_TYPE_REQUIRED = 'REQUIRE'
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH'
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH'
const VALIDATOR_TYPE_NUMERIC = 'NUMERIC'
const VALIDATOR_TYPE_MINVALUE = 'MINVALUE'
const VALIDATOR_TYPE_MAXVALUE = 'MAXVALUE'
const VALIDATOR_TYPE_EMAILFORMAT = 'EMAILFORMAT'

//validator factory functions
//Validation for required values
const VALIDATOR_REQUIRED = () => ({type: VALIDATOR_TYPE_REQUIRED})

//Validation for minimal length. The value is the minimum length to check against.
//i.e: a value of 5, when processed by the validate() function would check to see
//if the string's length is at least 5.
const VALIDATOR_MINLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val
});

//Validation for maxium length. Same as minimum, but the inverse.
const VALIDATOR_MAXLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val
});

//Validation to check if the value is a number. Since we don't need to specify
//more information about what to check for the string, there's no argument
//provided.
const VALIDATOR_NUMERIC = () => ({type: VALIDATOR_TYPE_NUMERIC});

//Validation to check if the value is equal to or greater than a specified value.
const VALIDATOR_MINVALUE = (val) => ({
  type: VALIDATOR_TYPE_MINVALUE,
  val
})

//Validation to check if the value is lower than or equal to the specified value.
const VALIDATOR_MAXVALUE = (val) => ({
  type: VALIDATOR_TYPE_MAXVALUE,
  val
})

//Validation to check if the value is in the format of an email. Like numeric and required
//no extra information is required to check this.
const VALIDATOR_EMAILFORMAT = () => ({type: VALIDATOR_TYPE_EMAILFORMAT})


//The validation function takes two arguments. A value and an array of validator objects.
//The type of each validator object is checked and compared. If all tests pass, then the
//function returns true.
const validate = (value, validators) => {
  let isValid = true;
  let errorMessages = [];
  for (const validator of validators){
    //Check Required
    if (validator.type === VALIDATOR_TYPE_REQUIRED){
      isValid = isValid && value.trim().length > 0
      !isValid && errorMessages.push('Value is required.')
    }
    //Check minimum length and truthy
    if (validator.type === VALIDATOR_TYPE_MINLENGTH){
      let isFieldValid = value.trim().length >= validator.val;
      isValid = isValid && isFieldValid
      if(!isFieldValid) errorMessages.push(`Value must be at least ${validator.val} characters in length.`)
    }
    //Check maximum length and truthy
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH){
      let isFieldValid = value.trim().length <= validator.val;
      isValid = isValid && isFieldValid
      if(!isFieldValid) errorMessages.push(`Value must be ${validator.val} characters or shorter in length.`)
    }
    //Check if numeric and truthy
    if (validator.type === VALIDATOR_TYPE_NUMERIC){
      let isFieldValid = isNaN(value) === false
      isValid = isValid && isFieldValid
      if(!isFieldValid) errorMessages.push(`Value must be a number.`)
    }
    //Check minimum value and truthy
    if (validator.type === VALIDATOR_TYPE_MINVALUE){
      let isFieldValid = value >= validator.val
      isValid = isValid && isFieldValid
      if(!isFieldValid) errorMessages.push(`Value must be greater than or equal to ${validator.val}.`)
    }
    //Check maximum value and truthy
    if (validator.type === VALIDATOR_TYPE_MAXVALUE){
      let isFieldValid = value <= validator.val
      isValid = isValid && isFieldValid
      if(!isFieldValid) errorMessages.push(`Value must be less than or equal to ${validator.val}.`)
    }
    //Check email format and truthy
    if (validator.type === VALIDATOR_TYPE_EMAILFORMAT){
      let isFieldValid = /^\S+@\S+\.\S+$/.test(value);
      isValid = isValid && isFieldValid
      if(!isFieldValid) errorMessages.push('Value must be a valid email.')
    }
  }
  return {value, isValid, errorMessages};
}

module.exports = {
  VALIDATOR_REQUIRED,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_NUMERIC,
  VALIDATOR_MINVALUE,
  VALIDATOR_MAXVALUE,
  VALIDATOR_EMAILFORMAT,
  validate,
}