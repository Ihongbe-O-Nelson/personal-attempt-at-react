import React from 'react'
import NavBar from './components/NavBar'
import ToDo from './components/ToDo'
import Input from './components/Input'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ToDo/>
      <Input/>
    </div>
  )
}

export default App