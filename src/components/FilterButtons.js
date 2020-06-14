import React, { useState } from 'react'

const FilterButtons = ({searchButton, setSearchButton}) => {
  return (
    <div>
      <div className="btn-group">
        <button
          class={ "btn " + ( searchButton === 'all' ? 'btn-dark' : 'btn-outline-secondary' )}
          onClick={() => setSearchButton("all")}
        >all</button>
        <button
          class={ "btn " + ( searchButton === 'checked' ? 'btn-dark' : 'btn-outline-secondary' )}
          onClick={() => setSearchButton("checked")}
          >checked</button>
        <button
          class={ "btn " + ( searchButton === 'unchecked' ? 'btn-dark' : 'btn-outline-secondary' )}
          onClick={() => setSearchButton("unchecked")}
        >unchecked</button>
      </div>
    </div>
  )
}

export default FilterButtons