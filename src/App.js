import React from 'react'
import './App.css'

import { AddressForm } from './components/Forms/AddressForm'

import { AddressFormProvider } from './contexts/AddressFormContext'

export const App = () => {
  return (
    <AddressFormProvider>
      <main className='App'>
        <AddressForm />
      </main>
    </AddressFormProvider>
  )
}

// Components

// Form
// Input
/// / InputError
// Label

// utils
/// / validation

// Requirements:

//     Create a simple form that has the following REQUIRED fields:
//         First Name STRING
//         Last Name STRING
//         City STRING
//         Zip NUMBER
//         Email STRING EMAIL
//     Each field should have validation to check:
//         Required **
//         Zip format **
//         Email format **
//     If any fields has validation errors, show a field specific validation error message similar to “Zip code can only be numeric and 5 digits”
//     There should be one additional validation that checks that zip value of 98107 (zip code in Seattle)
//          If not a match, Show a validation error of “Address is not correct”
//     If any field validations errors exist, the submit button should be disabled
//     Once submitted, alert the results
//         Format:

// First Name + Last Name

// City, Zip

// Email

// Provide the code to us and we will do a code review and test it.

export default App
