import { PropTypes } from 'prop-types'
import React, { useState, useContext, createContext } from 'react'

const defaultFieldValues = {
  value: '',
  isDirty: false,
  error: {},
  isValid: false
}

export const AddressFormInitialState = {
  formIsClean: true,
  firstName: {
    ...defaultFieldValues,
    id: 'firstName'
  },
  lastName: {
    ...defaultFieldValues,
    id: 'lastName'
  },
  city: {
    ...defaultFieldValues,
    id: 'city'
  },
  zipcode: {
    ...defaultFieldValues,
    id: 'zipcode'
  },
  email: {
    ...defaultFieldValues,
    id: 'email'
  }
}

export const AddressFormContext = createContext()
export const useAddressFormContext = () => useContext(AddressFormContext)

export const AddressFormProvider = ({ children }) => {
  const [state, setState] = useState(AddressFormInitialState)
  return (
    <AddressFormContext.Provider value={{ state, setState }}>
      {children}
    </AddressFormContext.Provider>
  )
}

AddressFormProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export default AddressFormContext
