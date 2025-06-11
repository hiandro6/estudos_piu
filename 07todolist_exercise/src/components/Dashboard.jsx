import Tarefa from "./tarefa"
import tarefas from '../dados'
import { useState } from "react"
export default function Dashboard({tarefas, onDetalhar}) {

    const [filtro, setFiltro] = useState("concluida")

    const filtradas = tarefas.filter(tarefa => tarefa.status === (filtro === "concluida" ? "concluida" : "pendente"))

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <button onClick={() => {setFiltro(filtro === "pendente" ? "concluida" : "pendente")}}>Mudar filtro para {filtro}</button>
            <h1>filtradas:</h1>
            <ol>
                {filtradas.map(tarefa => (
                    <li>{tarefa.descricao}  e o status = {tarefa.status}</li>
                ))}
            </ol>









            <h2>sem filtro:</h2>
            {tarefas.map(tar => (
            <Tarefa tarefa={tar} onDetalhar={onDetalhar}/>
      ))}
        </div>
        
    )
}