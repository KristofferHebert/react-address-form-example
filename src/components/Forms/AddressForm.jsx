import React from 'react'
import { Input } from '../Input'
import { useAddressFormContext } from '../../contexts/AddressFormContext'
import { validator } from '../../utils/validator'
import { hasErrors } from '../../utils/hasErrors'
import { capitalize } from '../../utils/capitalize'

export const AddressForm = () => {
  const { state, setState } = useAddressFormContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Sanitize and format output
    const firstName = capitalize(state.firstName.value || '')
    const lastName = capitalize(state.lastName.value || '')
    const city = capitalize(state.city.value || '')
    const zipcode = capitalize(state.zipcode.value || '')
    const email = capitalize(state.email.value || '')

    alert(`
      ${firstName} ${lastName}
      ${city}, ${zipcode}
      ${email}
    `)
  }

  const handleInputChange = (validationsArr) => (e) => {
    e.preventDefault()
    const inputState = { ...state[e.target.id] }
    inputState.error = validator(e.target.value, validationsArr)
    inputState.isDirty = true
    inputState.value = e.target.value
    inputState.isValid = typeof inputState.error === 'undefined'

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
        <Input {...state.email} labelText='Email' placeholder='myemail@email.com' onChange={handleInputChange(['required', 'email'])} isRequired />
        <Input id='submit' className='button input w-full' type='submit' value='Submit' disabled={disableSubmit} />
      </fieldset>
    </form>
  )
}

export default AddressForm
