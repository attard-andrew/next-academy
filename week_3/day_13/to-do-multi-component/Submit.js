import React, { useState } from 'react'

const Submit = (props) => {
  const {addItem} = props

  const [inputVal, setInputVal] = useState("")
  const onInputChange = (e) => {
    setInputVal(e.target.value)
  }

  return (
    <form onSubmit={addItem(inputVal, () => {setInputVal("")})}>
      <input type="text" value={inputVal} onChange={onInputChange}/>
      <input type="submit"/>
    </form>
  )
}

export default Submit