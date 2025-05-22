import { useState } from 'react'
import Galeria from './components/Galeria'
import './App.css'
import Detalhes from './components/Detalhes'

function App() {
  const [tema, setTema] = useState(false)
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null)

  function handleClick() {
    setTema(oldTema => !oldTema)
  }

  return (
    <div className={tema ? "main-div dark" : "main-div light"}>
      <button onClick={handleClick}>alternar tema</button>

      <Galeria selecionarPersonagem={setPersonagemSelecionado} />

      <Detalhes personagem={personagemSelecionado} />
    </div>
  )
}

export default App