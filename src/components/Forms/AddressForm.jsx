import React from 'react'
import { Input } from '../Input'
import { useAddressFormContext } from '../../contexts/AddressFormContext'

export const AddressForm = () => {
  const { state, setState } = useAddressFormContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state, setState)
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Customer Details:</legend>
        <Input {...state.firstName} labelText='First Name' placeholder='John' />
        <Input {...state.lastName} labelText='Last Name' placeholder='Hancock' />
        <Input {...state.city} labelText='City' placeholder='Seattle' />
        <Input {...state.zipcode} labelText='Zipcode' placeholder='98101' />
        <Input {...state.email} labelText='Email' placeholder='john.hancock@johnhancock.com' />
        <Input id='submit' className='button input w-full' type='submit' value='Submit' />
      </fieldset>
    </form>
  )
}

export default AddressForm
