import React from 'react'
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'

import App from '../../App'

beforeEach(() => {
  render(<App />)
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
