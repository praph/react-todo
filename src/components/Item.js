import React from 'react'
import './Item.css'

const Item = ({ index, title, checked, removeItem, updateChecked }) => {
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => updateChecked(index)}
      />
      <span className={"title " + (checked ? "checked" : "")}>
        { title }
      </span>
      <button className="delete-button" onClick={() => removeItem(index)}>delete</button>
    </div>
  )
}

export default Item