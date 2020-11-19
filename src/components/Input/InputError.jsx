import React from 'react'
import PropTypes from 'prop-types'

export const InputError = ({ errors = [] }) => {
  if (errors.length === 0) return null

  return (
    <p className='error-message'>{errors.join('<br />')}</p>
  )
}

InputError.propTypes = {
  errors: PropTypes.array.isRequired
}

export default InputError
