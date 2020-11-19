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
      <Input id='firstName' placeholder='John' />
      <Input id='lastName' placeholder='Hancock' />
      <Input id='city' placeholder='Seattle' />
      <Input id='zipcode' placeholder='98101' />
      <Input id='email' placeholder='john.hancock@johnhancock.com' />
      <Input id='submit' className='button input w-full' type='submit' value='Submit' />
    </form>
  )
}

export default AddressForm
