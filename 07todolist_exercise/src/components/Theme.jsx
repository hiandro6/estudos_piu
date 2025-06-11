import { useState } from "react";
import './Theme.css'

export default function Theme({children}) {
    const [tema, Settema] = useState("light")
   
    function handleClick(){
        Settema(tema === "light" ? "dark" : "light")
    }

    return (
        <div className={tema + "mode"}>
            <button onClick={handleClick}> alternar para {tema === "light" ? "dark" : "light"} mode</button>


            {children}
        </div>
    )
}