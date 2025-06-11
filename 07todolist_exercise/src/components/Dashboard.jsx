import Tarefa from "./tarefa"
import tarefas from '../dados'
export default function Dashboard({tarefas, onDetalhar}) {


    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {tarefas.map(tar => (
            <Tarefa tarefa={tar} onDetalhar={onDetalhar}/>
      ))}
        </div>
        
    )
}