export default function Detalhes({detalhada}){
    if (!detalhada) {
        return null;
    }

    return (
        <div style={{ border: "2px solid", padding: "10px", width: "400px", margin:"30px auto" }}>
            <h2>detalhes da tarefa: </h2>
            {detalhada}
        </div>
    )
}