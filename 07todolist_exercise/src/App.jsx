import { useState } from 'react'
import Tarefa from './components/tarefa'
import './App.css'
import Dashboard from './components/Dashboard'
import Theme from './components/Theme'
import Detalhes from './components/Detalhes'
import tarefas from './dados'
function App() {
  const [tarefaDetalhada, setTarefaDetalhada] = useState(null);
  return (
  
    <Theme>
      
      <Detalhes detalhada={tarefaDetalhada}/>

      <Dashboard tarefas={tarefas} onDetalhar={setTarefaDetalhada}/>
      <ol>
        <li>
            Definam as tarefas em um array, definido em um arquivo a parte.
        </li>
        <li>
            Crie um componente que irá apresentar uma tarefa. Este componente deverá ter um botão para o usuário marcar se a tarefa foi concluída ou não.
        </li>
         <li>
            Trabalhe estilos diferentes para a visualização da tarefa a depender se ela foi marcada como realizada ou não.
         </li>
         <li>
            Crie um dashboard que irá apresentar a lista de todas as tarefas definidas (a ideia aqui é trabalhar com children). 
         </li>
         <li>
            Implementar a função dark/ligh mode.
          </li>
      </ol>


    </Theme>

  )
}

export default App
