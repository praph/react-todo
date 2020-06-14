import React, { useState } from 'react'

const Add = ({addItem}) => {
  const [ value, setValue ] = useState('')

  const handleSubmit = () => {
    addItem(value)

    setValue('')
  }
  
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input value={value} onChange={ref => setValue(ref.target.value)}/>
        <button onClick={() => handleSubmit()}>go</button>
      </form>
    </div>
  )
}

export default Add