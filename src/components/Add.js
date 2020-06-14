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
        <div className="input-group">
          <input
            className="form-control"
            value={value}
            onChange={ref => setValue(ref.target.value)}/>
          <div className="input-group-append">
            <button class="btn btn-outline-secondary" onClick={() => handleSubmit()}>go</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Add