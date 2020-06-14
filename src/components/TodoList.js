import React, { useState } from 'react'
import Add from './Add';
import Item from './Item';

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

  return (
    <div>
      <h3>Add new item</h3>
      <Add
        addItem={addItem}/>

      <hr />

      <div className="card">
        <div className="card-header">
          Todo List
          <input className="form-control"/>
        </div>
        <div className="card-body">
          { list.map( (item, index) =>
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