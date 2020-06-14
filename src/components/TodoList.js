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

  const updateChecked = (index) => {
    let newList = Object.assign([], list)

    newList[index].checked = !newList[index].checked

    setList(newList)
  }
  const removeItem = (index) => {
    let newList = Object.assign([], list)

    newList.splice(index, 1)

    setList(newList)
  }

  const addItem = (title) => {
    let newList = Object.assign([], list)

    newList.unshift({ 
      title: title,
      checked: false,
    })

    setList(newList)
  }

  return (
    <div>
      We're in TodoList component
      <Add
      addItem={addItem}/>

      { list.map( (item, index) =>
        <Item
          index={index}
          title={item.title}
          checked={item.checked}
          updateChecked={updateChecked}
          removeItem={removeItem}
          key={index}
        />
      ) }
    </div>
  )
}

export default TodoList