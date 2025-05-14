import { useState } from "react";

export default function Change(){
    let [count, setCount] = useState(0)
    // let counter = 0
    return(
        
        <div>
            <button onClick={() => setCount(count + 1)}> click here</button>
            <h1>{count}</h1>
        </div>

    ); 
}