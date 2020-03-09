import React, { useState } from 'react';
import './App.css';
function App() {
  const [inputVal, setInputVal] = useState("")
  const [list, setList] = useState([
    { 
      text: "To do task 1",
      completed: false,
      isEdit: false,
      edittedVal: ""
    },
    {
      text: "To do task 2",
      completed: true,
      isEdit: false,
      edittedVal: ""
    }])
  const onInputChange = (e) => {
    setInputVal(e.target.value)
  }
  const onAddTask = (e) => {
    e.preventDefault()
    const valToAdd = inputVal.trim()
    if(valToAdd !== ""){
      setList([...list, { text: valToAdd, completed: false, isEdit: false, edittedVal: ""}])
      setInputVal("")
    }
  }
  return (
    <div className="App">
      <form onSubmit={onAddTask}>
        <input type="text" value={inputVal} onChange={onInputChange}/>
        <input type="submit"/>
      </form>
      <ul>
        {
          list.map((toDoItem, index) => (
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
          ))
        }
      </ul>
    </div>
  );
}
export default App;