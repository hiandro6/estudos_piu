import { useState } from 'react'
import {nomes, menus} from "./componentes/dados"
import './App.css'
import Dropdown from './componentes/Dropdown'
function App() {


  return (
    <>
      <h1>dropdown</h1>
      <Dropdown titulo={nomes} lista={menus}/>

    </>
  )
}

export default App
