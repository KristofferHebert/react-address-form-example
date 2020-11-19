// Pass form state to isDirty
// if isDirty exists on any field return false
// else return true

export const isDirty = (formState) => {
  const fields = Object.keys(formState)

  for (const field of fields) {
    if (formState[field] && formState[field].isDirty) {
      return true
    }
  }
  return false
}

export default isDirty
