import { useState } from "react"
export default function TodoForm() {
    const [tarefa, SetTarefa] = useState("")
    const [lista, SetLista] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        SetLista(...lista, tarefa)
        SetTarefa([])
    }

    const handleClear = () => {
        SetLista([])
    }

    return (
        <div>
            <h2>lista de tarefas react</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tarefaa">
                    <input type="text" name="tarefaa" id="tarefaa" onChange={(e) => SetTarefa(e.target.value)} value={tarefa}/>
                </label>
                <input type="submit" value="adicionar" />
                <p>{tarefa}</p>
            </form>

            <button onClick={handleClear}>resetar</button>
            <h4>lista = {lista}</h4>
            <h4>tarefas = {tarefa}</h4>
            <ul>
                {lista.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}