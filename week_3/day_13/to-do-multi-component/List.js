import React from 'react'
import ListItem from './ListItem'


const List = (props) => {
  const {list, setList} = props
  return (
    <ul>
      {
        list.map((toDoItem, index) => (
          <ListItem toDoItem={toDoItem} list={list} setList={setList} index={index} />
        ))
      }
    </ul>
  )
}


export default List