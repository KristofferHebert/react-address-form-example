import React from 'react'
/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react'

import App from '../../App'
let wrapper

beforeEach(() => {
  wrapper = render(<App />)
})

describe('Address Form Tests', () => {
  test('It renders Address Form First Name field', () => {
    const linkElement = screen.getByText(/First Name/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('It renders Address Form Last Name field', () => {
    const linkElement = screen.getByText(/Last Name/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('It renders Address Form City field', () => {
    const linkElement = screen.getByText(/City/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('It renders Address Form Zipcode field', () => {
    const linkElement = screen.getByText(/Zipcode/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('It renders Address Form Email field', () => {
    const linkElement = screen.getByText(/Email/i)
    expect(linkElement).toBeInTheDocument()
  })
})

// TBD add more intergration tests for form input validation
describe('Address Form Zipcode Tests', () => {
  test('It renders Address Form Zipcode error if value is not 5 characters long', () => {
    const { getByPlaceholderText, getByText } = wrapper
    const input = getByPlaceholderText(/98107/i)
    fireEvent.change(input, { target: { value: '1234' } })
    const warningText = getByText(/Zip code can only be numeric and 5 digits/i)
    expect(warningText).toBeInTheDocument()
  })

  test('It renders Address Form Zipcode error if value is not numeric', () => {
    const { getByPlaceholderText, getByText } = wrapper
    const input = getByPlaceholderText(/98107/i)
    fireEvent.change(input, { target: { value: 'ABCDE' } })
    const warningText = getByText(/Zip code can only be numeric and 5 digits/i)
    expect(warningText).toBeInTheDocument()
  })
})

describe('Address Form Email Tests', () => {
  test('It renders Address Form Email error if value is not email', () => {
    const { getByPlaceholderText, getByText } = wrapper
    const input = getByPlaceholderText(/myemail@email.com/i)
    fireEvent.change(input, { target: { value: 'email@email' } })
    const warningText = getByText(/Please provide valid email address/i)
    expect(warningText).toBeInTheDocument()
  })
})
