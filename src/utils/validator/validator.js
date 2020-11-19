// Takes an array of validator names and validates the values in order

const validateRequired = (value) => {
  if (!value) {
    return {
      type: 'required',
      message: 'This field is required'
    }
  }
  return true
}
// TBD update use real zip code validation api or library
const validateZipcode = (value) => {
  if (typeof parseInt(value) !== 'number' || value.length !== 5) {
    return {
      type: 'zipcode',
      message: 'Zip code can only be numeric and 5 digits'
    }
  }
  return true
}
// TBD update use API or library
const validateEmail = (value) => {
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!value.match(emailPattern)) {
    return {
      type: 'email',
      message: 'Please provide valid email address'
    }
  }
  return true
}

// TBD update use API or library for address and zip validation
const validateZipcodeWithAddress = (value) => {
  // Check if valid zipcode
  const zipcode = validateZipcode(value)
  if (zipcode.type) return zipcode

  // Replace with API call that validates zipcode against address
  if (value !== '98107') {
    return {
      type: 'address',
      message: 'Address is not correct'
    }
  }
  return true
}

export const validators = {
  email: validateEmail,
  zipcode: validateZipcode,
  required: validateRequired,
  address: validateZipcodeWithAddress
}

export const validator = (value, validationArr) => {
  // eslint-disable-next-line no-var
  let error

  for (const validatorName of validationArr) {
    const validatorFn = validators[validatorName]
    if (!validatorFn) {
      console.error(validatorName, ' is not a valid validator')
    }

    const errorCheck = validatorFn(value)
    if (errorCheck.type) {
      error = errorCheck
    }
  }

  return error
}

export default validator
