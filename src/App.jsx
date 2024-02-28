import React from 'react'
import NavBar from './components/NavBar'
import ToDo from './components/ToDo'
import Input from './components/Input'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const initialArray = [{id: 1, text: "hello World"}]
  const [list, setList] = useState(initialArray)
  const [input, setInput] = useState('')

  function handleSubmit(e){
    e.preventDefault();
    setList((prev) => [...prev, { id: uuidv4(), text: input }]);
    list.unshift({id:uuidv4(), text: input});
    console.log('form submitted');
  }
  function handleInput(e){
    e.preventDefault();
    setInput(e.target.value)
  }
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <NavBar setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Input handleInput={handleInput} handleSubmit={handleSubmit}/>
      <ToDo list={list}/>
    </div>
  )
}

export default App