import { useEffect, useState } from "react";

export default function InputColor() {
    const [dadoinput, setDadoinput] = useState("")
    const colors = ["green", "blue", "red", "orange", "gray", "yellow", "purple", "brown", "pink", "aqua"]
    const randomcolor = colors[Math.floor(Math.random() * colors.length)]
    useEffect(() => {
        document.body.style.backgroundColor = randomcolor
        }, [dadoinput]
    )

    return(
        <div>
            <input type="text" name="" id="" onChange={(e) => {setDadoinput(e.target.value)}} />
        </div>
    )
}
