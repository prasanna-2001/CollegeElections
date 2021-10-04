import { useState } from 'react'
import './App.css'
import RightInfo from './Comonent/RightInfo'
import LeftpostMenu from './Comonent/leftPostMenu'
import Navbar from './Comonent/navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LeftpostMenu/>
      <RightInfo/>
    </div>
  )
}

export default App
