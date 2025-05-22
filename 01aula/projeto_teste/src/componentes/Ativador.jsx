function Ativador() {
    const label = "click here to see something cool"

    function handleClick(){
        return(
            <>
                <Redux/>
            </>
        )
    }

    return (

        <>
            <div>
                <h2>trying to do by my own:</h2>
            </div>
            <div>
                <button onClick={handleClick}>{label}</button>
            </div>
        </>
    
    )
}

export default Ativador