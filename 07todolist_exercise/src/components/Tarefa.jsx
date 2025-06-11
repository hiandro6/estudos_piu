import { useState } from "react"

export default function Tarefa({tarefa, onDetalhar}){
    const [situacao, setSituacao] = useState("pendente")

    function alternarSituacao() {
        if (situacao === "pendente") {
            setSituacao("concluida")
        }
        else {
        setSituacao("pendente")
        // tarefa.situacao = situacao
        }
    }

    function handleClick() {
        onDetalhar(tarefa)
    }

    return (
        <div style={{border: "1px solid", margin: "10px", display: "flex", width: "250px", height: "250px", justifyContent: "center", alignItems: "center", padding: "10px", flexDirection: "column"}}>
            <h4>{tarefa.descricao}</h4>
            <p> status = | <span style={{color: situacao === "pendente" ? "red" : "green"}}>{situacao}</span> |</p>
            
            

            
            <button onClick={alternarSituacao} style={{padding: "5px", color: "white",  backgroundColor: situacao === "pendente" ? "green" : "red"}}>
                {situacao === "pendente" ? "concluir" : "desfazer"}
            </button>


            <button onClick={handleClick}>detalhar</button>

        </div>
    )
}