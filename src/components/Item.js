import React from 'react'
import './Item.css'

const Item = ({ index, title, checked, removeItem, updateChecked }) => {
  return (
    <div className="input-group mb-2">
      <div className="input-group-prepend">
        <span class="input-group-text">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateChecked(index)}
          />
        </span>
      </div>
      <span className={"title " + (checked ? "checked" : "")}>
        { title }
      </span>
      <div className="input-group-append">
        <button className="btn btn-danger" onClick={() => removeItem(index)}>delete</button>
      </div>
    </div>
  )
}

export default Item