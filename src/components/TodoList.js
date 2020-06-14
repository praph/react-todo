import React, { useState } from 'react'
import Add from './Add';
import Item from './Item';
import FilterButtons from './FilterButtons';
import SearchText from './SearchText';

const TodoList = () => {
  const [ list, setList ] = useState([
    {
      title: 'todo 1',
      checked: false,
    },{
      title: 'todo 12',
      checked: false,
    },{
      title: 'todo 123',
      checked: true,
    },{
      title: 'todo 1234',
      checked: false,
    },
  ])

  const [ searchText, setSearchText ] = useState('')
  const [ searchButton, setSearchButton ] = useState('all')

  const addItem = (title) => {
    let newList = Object.assign([], list)

    newList.unshift({ 
      title: title,
      checked: false,
    })

    setList(newList)
  }
  const removeItem = (index) => {
    let newList = Object.assign([], list)

    newList.splice(index, 1)

    setList(newList)
  }
  const updateChecked = (index) => {
    let newList = Object.assign([], list)

    newList[index].checked = !newList[index].checked

    setList(newList)
  }

  let filteredList = list.filter(item => item.title.indexOf(searchText) > -1)
  if(searchButton === 'checked') {
    filteredList = filteredList.filter(item => item.checked)
  }
  if(searchButton === 'unchecked') {
    filteredList = filteredList.filter(item => !item.checked)
  }

  return (
    <div>
      <h3>Add new item</h3>
      <Add
        addItem={addItem}/>

      <hr />

      <div className="row">
        <div className="col-sm-6">
          <FilterButtons
            searchButton={searchButton}
            setSearchButton={setSearchButton}/>
        </div>
        <div className="col-sm-6">
          <SearchText setSearchText={setSearchText}/>
        </div>
      </div>

      <hr />

      <div className="card">
        <div className="card-header">
          Todo List
          <div class="float-right">
            <small>rezultate { filteredList.length } / { list.length }</small>
          </div>
        </div>
        <div className="card-body">
          { filteredList.map( (item, index) =>
            <Item
              index={index}
              title={item.title}
              checked={item.checked}
              removeItem={removeItem}
              updateChecked={updateChecked}
              key={index}
            />
          ) }
        </div>
      </div>
    </div>
  )
}

export default TodoList
