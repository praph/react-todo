import React from 'react'
import Add from './Add';
import Item from './Item';

const TodoList = () => {
  return (
    <div>
      We're in TodoList component
      <Add />

      <Item />
      <Item />
      <Item />
    </div>
  )
}

export default TodoList