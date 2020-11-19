import React from 'react'
import { render } from '@testing-library/react'

import { Input } from '.'

const mockOnChange = () => {}

const mockProps = {
  value: '',
  isDirty: false,
  errors: [],
  id: 'firstName',
  zipcode: '98101',
  labelText: 'First Name',
  placeholder: 'John',
  onChange: mockOnChange
}

const setup = (props, labelText) => {
  const utils = render(<Input {...props} />)
  const input = utils.getByLabelText(labelText)
  return {
    input,
    ...utils
  }
}

test('Input should render', () => {
  render(<Input {...mockProps} />)
})

test('Input should render value', () => {
  mockProps.value = 'Hello World'
  setup(mockProps, 'First Name')
})
