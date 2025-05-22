function Escopo() {
    const label = "Clique Aqui"

    function handleClick(){
        alert("alert, you've clicked")
    }

    return (

        <>
            <div>
                <h2>Teste de componentes</h2>
            </div>
            <div>
                <button onClick={() => console.log("you just clicked the button")}>{label}</button>
            </div>

            <div>
                <button onClick={handleClick}>don't {label}</button>
            </div>
        </>
    
    )
}

export default Escopo