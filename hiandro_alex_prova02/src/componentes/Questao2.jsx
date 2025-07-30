import { useState, useEffect } from 'react';
import './Questao2.css'

export default function Questao2() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [inputdado, setInputdado] = useState("")
  const [contador, setContador] = useState(0)

  useEffect(() => {
    // Usamos uma função assíncrona dentro do useEffect
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums'); //fecth faz uma requisição HTTP utilizando o método GET
        const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
        setAlbums(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar albums:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }

    fetchAlbums();
  }, [contador]); 

  if (loading) {
    return <p>Carregando...</p>;
  }

  const albums_filtrados = albums.filter((item) => (item.userId === Number(inputdado)) )

  return (
    <div className='conteiner'>
        
        
        <input type="text" onChange={(e) => {setInputdado(e.target.value)}} placeholder="digite o id do usuario(1 a 10)"/>
        <h1>Lista de Albums</h1>
        <ol>
            {albums_filtrados.map(album => (
            <li key={album.id}>{album.title}</li>
            ))}
        </ol>

        <button onClick={() => {setContador(contador + 1)}}>acessar dados novamente</button>
    </div>
  );
}