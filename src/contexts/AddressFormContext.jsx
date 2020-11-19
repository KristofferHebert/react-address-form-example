import { PropTypes } from 'prop-types'
import React, { useContext, createContext } from 'react'

const defaultFieldValues = {
  value: '',
  isDirty: false,
  errors: []
}

export const AddressFormInitialState = {
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

export const AddressFormContext = createContext(AddressFormInitialState)
export const useAddressFormContext = () => useContext(AddressFormContext)

export const AddressFormProvider = ({ children }) => {
  const { state, setState } = useAddressFormContext()
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
