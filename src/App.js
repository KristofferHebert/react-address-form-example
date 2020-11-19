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

export default App
