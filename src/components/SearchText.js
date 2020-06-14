import React, { useState } from 'react'

const SearchText = ({setSearchText}) => {
  return (
    <div className="input-group">
      <div className="input-group-prepend input-group-text">
        🔎
      </div>
      <input
        className="form-control"
        onChange={(ref) => setSearchText(ref.target.value)}
      />
    </div>
  )
}

export default SearchText