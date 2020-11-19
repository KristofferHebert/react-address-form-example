// Pass form state to hasErrors
// if errors exist return false
// else return true

export const hasErrors = (formState) => {
  const fields = Object.keys(formState)
  for (const field of fields) {
    if (formState[field].isDirty && formState[field] && formState[field].error) {
      return true
    }
  }
  return false
}

export default hasErrors
