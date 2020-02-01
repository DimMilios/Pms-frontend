import { useState } from 'react'

export const useField = (type, initialValue = '') => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event) => {
    type === 'number' ?
      setValue(Number(event.target.value))
      : setValue(event.target.value)
    // console.log(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return [{
    type,
    value,
    onChange,
  }, reset]
}