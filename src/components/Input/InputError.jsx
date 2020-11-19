import React from 'react'
import PropTypes from 'prop-types'

export const InputError = ({ errors = [] }) => {
  if (errors.length) return null

  return (
    <p>{errors.join('<br />')}</p>
  )
}

InputError.propTypes = {
  errors: PropTypes.array.isRequired
}

export default InputError
