import React from 'react'

const ListItem = (props) => {
  const {toDoItem, list, setList, index} = props
  return (
    <li 
      className={toDoItem.completed ? "todo completed": "todo"} 
      onClick={() => {
        const newList = [...list]
        newList[index].completed = !newList[index].completed
        setList(newList)
      }}>
        { !toDoItem.isEdit ? toDoItem.text: <input 
                                              type="text" 
                                              value={toDoItem.edittedVal} 
                                              onChange={(e) => {
                                                const newList= [...list]
                                                newList[index].edittedVal = e.target.value
                                                setList(newList)
                                              }}/>}
        <button onClick={(e)=> {
          e.stopPropagation()
          const newList= [...list]
          if(newList[index].isEdit === true){
            newList[index].text = newList[index].edittedVal
            newList[index].edittedVal = ""
          }
          newList[index].isEdit = !newList[index].isEdit
          setList(newList)
        }}>Edit</button>
        <button onClick={(e) => {
          e.stopPropagation()
          const newList = [...list]
          newList.splice(index, 1)
          setList(newList)
        }}>Delete</button>
      </li>
  )
}

export default ListItem