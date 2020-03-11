import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Submit from './components/Submit';
import List from './components/List';

function App() {
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

  const onAddTask = (inputVal, callback) => {
    return (e) => {
      e.preventDefault()
      const valToAdd = inputVal.trim()
      if(valToAdd !== ""){
        setList([...list, { text: valToAdd, completed: false, isEdit: false, edittedVal: ""}])
      }
      callback()
    }
  }

  

  return (
    <div className="App">
      <Submit addItem={onAddTask}></Submit>
      <List list={list} setList={setList}></List>
    </div>
  );
}

export default App;
