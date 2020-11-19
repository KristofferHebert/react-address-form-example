import React from 'react'
import PropTypes from 'prop-types'

import { InputError } from './InputError'

export const InputRequiredStar = () => (
  <span className='required'>
    *
  </span>
)

export const Input = ({ id = '', labelText = '', className = 'input w-full', value = '', type = 'text', onChange = () => {}, error = {}, isRequired = false, disabled = false, placeholder = '' }) => {
  className = error && error.type ? className += ' input__has-errors' : className

  return (
    <label htmlFor={id}>
      <span className='input-label'>{labelText} {isRequired && <InputRequiredStar />}</span>
      <input id={id} type={type} value={value} className={className} onChange={onChange} placeholder={placeholder} disabled={disabled} />
      <InputError error={error} />
    </label>
  )
}

Input.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.object,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string
}

export default Input
