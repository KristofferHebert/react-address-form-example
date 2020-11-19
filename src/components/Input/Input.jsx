import React from 'react'
import PropTypes from 'prop-types'

import { InputError } from './InputError'

export const Input = ({ id = '', labelText = '', className = 'input w-full', value = '', type = 'text', onChange = () => {}, errors = [], placeholder = '' }) => {
  return (
    <label htmlFor={id}>
      <span className='input-label'>{labelText}</span>
      <input id={id} type={type} value={value} className={className} onChange={onChange} placeholder={placeholder} />
      <InputError errors={errors} />
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
  errors: PropTypes.array,
  placeholder: PropTypes.string
}

export default Input
