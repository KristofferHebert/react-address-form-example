import React from 'react'
import PropTypes from 'prop-types'

export const InputErrorMessage = ({ message }) => (
  <span>{message}</span>
)

export const InputError = ({ error }) => {
  if (!error.type) return null

  // Can support multiple error messages
  // Not sure if it should or not
  return (
    <div className='error-message'>
      <InputErrorMessage key={error.type} message={error.message} />
    </div>
  )
}

InputErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

InputError.propTypes = {
  error: PropTypes.object.isRequired
}

export default InputError
