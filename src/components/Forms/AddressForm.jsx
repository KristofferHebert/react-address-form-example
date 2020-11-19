import React from 'react'
import { Input } from '../Input'
import { useAddressFormContext } from '../../contexts/AddressFormContext'
import { validator } from '../../utils/validator'
import { hasErrors } from '../../utils/hasErrors'

export const AddressForm = () => {
  const { state, setState } = useAddressFormContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`
      ${state.firstName} ${state.lastName}
      ${state.city}, ${state.zipcode}
      ${state.email}
    `)
  }

  const handleInputChange = (validationsArr) => (e) => {
    e.preventDefault()
    const inputState = { ...state[e.target.id] }
    inputState.error = validator(e.target.value, validationsArr)
    inputState.isDirty = true
    inputState.value = e.target.value
    setState(prevState => ({ ...prevState, formIsClean: false, [e.target.id]: inputState }))
  }

  const disableSubmit = state.formIsClean || hasErrors(state)

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Customer Details:</legend>
        <Input {...state.firstName} labelText='First Name' placeholder='John' onChange={handleInputChange(['required'])} isRequired />
        <Input {...state.lastName} labelText='Last Name' placeholder='Hancock' onChange={handleInputChange(['required'])} isRequired />
        <Input {...state.city} labelText='City' placeholder='Seattle' onChange={handleInputChange(['required'])} isRequired />
        <Input {...state.zipcode} labelText='Zipcode' placeholder='98107' onChange={handleInputChange(['required', 'zipcode', 'address'])} isRequired />
        <Input {...state.email} labelText='Email' placeholder='john.hancock@johnhancock.com' onChange={handleInputChange(['required', 'email'])} isRequired />
        <Input id='submit' className='button input w-full' type='submit' value='Submit' disabled={disableSubmit} />
      </fieldset>
    </form>
  )
}

export default AddressForm
