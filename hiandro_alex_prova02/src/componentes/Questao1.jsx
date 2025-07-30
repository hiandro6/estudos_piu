import { useEffect, useState } from "react"
import "./Questao1.css"

export default function Questao1() {
    const [palavra, setPalavra] = useState("")

    useEffect(() => {
        document.body.className = palavra
    }, [palavra])

    return (
        <div className={"login"}>
            <div></div>
            <h1>LOGIN</h1>
            <input type="text" placeholder="login"/>
            <input type="text" placeholder="palavra passe" onChange={(e) => {setPalavra(e.target.value)}}/>
        </div>
    )
}