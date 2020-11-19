// Pass form state to hasErrors
// if errors exist return false
// else return true

export const hasErrors = (formState) => {
  const fields = Object.keys(formState)
  for (const field of fields) {
    if (fields[field] && fields[field].errors && fields[field].errors.length !== 0) {
      return true
    }
  }
  return false
}

export default hasErrors
