import { validators } from './validator'

describe('Validation Tests', () => {
  test('It returns true if required value is provided', () => {
    const validatorFn = validators.required
    const input = 'John Hancock'
    expect(validatorFn(input)).toBe(true)
  })

  test('It returns error message if required value is not provided', () => {
    const validatorFn = validators.required
    const input = ''
    expect(validatorFn(input).type).toBe('required')
  })

  test('It returns true if valid zipcode is provided', () => {
    const validatorFn = validators.zipcode
    const input = '98007'
    expect(validatorFn(input)).toBe(true)
  })

  test('It returns error message if valid zipcode is not provided', () => {
    const validatorFn = validators.zipcode
    const input = '9800712345'
    expect(validatorFn(input).type).toBe('zipcode')
  })

  test('It returns true if valid email is provided', () => {
    const validatorFn = validators.email
    const input = 'firstname.lastname@gmail.com'
    expect(validatorFn(input)).toBe(true)
  })

  test('It returns error message if valid email is not provided', () => {
    const validatorFn = validators.email
    const input = 'firstname.lastname@gmail'
    expect(validatorFn(input).type).toBe('email')
  })

  test('It returns true if valid address is provided', () => {
    const validatorFn = validators.address
    const input = '98107'
    expect(validatorFn(input)).toBe(true)
  })

  test('It returns error message if valid address is not provided', () => {
    const validatorFn = validators.address
    const input = '98007'
    expect(validatorFn(input).type).toBe('address')
  })
})
