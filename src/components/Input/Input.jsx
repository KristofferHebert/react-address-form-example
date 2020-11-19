import React from 'react'
import PropTypes from 'prop-types'

import { InputError } from './InputError'

export const Input = ({ id = '', labelText = '', className = 'input', value = '', type = 'text', onChange, errors = [], placeholder = '' }) => {
  return (
    <label htmlFor={id}>
      {labelText}
      <input id={id} type={type} value={value} className={className} onChange={onChange} placeholder={placeholder} />
      <InputError errors={errors} />
    </label>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired
}

export default Input
