// Pass form state to hasErrors
// if errors exist return false
// else return true

export const hasErrors = (formState) => {
  const fields = Object.keys(formState)
  for (const field of fields) {
    if (formState[field].value && !formState[field].isValid) {
      return true
    }
  }
  return false
}

export default hasErrors
