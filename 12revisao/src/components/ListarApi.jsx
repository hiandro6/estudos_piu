import { useState, useEffect } from 'react';

export default function EffectAPI() {
    const [albuns, setAlbuns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inputdata, setInputdata] = useState("");
    const [atualizar, setAtualizar] = useState(0)
    useEffect(() => {
        const fecthAlbuns = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const data = await response.json();
            setAlbuns(data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        } finally {
            setLoading(false);
        }
        }

        fecthAlbuns();
    }, [atualizar]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    const filtrados = albuns.filter(item => item.userId === Number(inputdata) );

    return (
        <div>
            <h1>Lista de Albuns</h1>
            <input 
                type="number" 
                placeholder="Digite um ID de 1 a 10"
                onChange={(e) => setInputdata(e.target.value)}
            />
            <ul>
                {filtrados.map(item =>(
                <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <button onClick={() => {setAtualizar(atualizar + 1)}}>acessar api</button>
        </div>
    );
    }
