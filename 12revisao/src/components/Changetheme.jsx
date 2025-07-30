import { useEffect, useState } from "react"
import "./Changetheme.css"
export default function Changetheme({children}) {
    const [mode, setMode] = useState("light")

    useEffect(() => {
        document.body.className = mode
    }, [mode])
    return (
        <div>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                change to {mode === "light" ? "dark" : "light"} mode
            </button>
            {children}
        </div>
    )
}