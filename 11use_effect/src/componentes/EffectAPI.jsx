import { useState, useEffect } from 'react';

export default function EffectAPI() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [acionador, setAcionador] = useState(0)

  useEffect(() => {
    // Usamos uma função assíncrona dentro do useEffect
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //fecth faz uma requisição HTTP utilizando o método GET
        const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
        setUsuarios(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }

    fetchUsuarios();
  }, [acionador]); // O array vazio garante que o efeito execute apenas uma vez

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h3>tabela de names</h3>
      <table border={3} style={{border: "8px solid blue"}}>  
        <thead>   
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
        {usuarios.map(usuario => (
          <tr>
            <td key={usuario.id}>{usuario.name}</td>
          </tr>
        ))}
        </tbody>

      </table>
        <button style={{backgroundColor: "limegreen", color: "white", border: "1px solid black"}} onClick={() => {setAcionador(acionador + 1)}}>resgatar dados</button>

      <h4>tabela de usernames</h4>
      <table border={1} style={{border: "5px solid orange"}}>  
        <thead>   
          <tr>
            <th>UserName</th>
          </tr>
        </thead>
        <tbody>
        {usuarios.map(usuario => (
          <tr>
            <td key={usuario.id}>{usuario.username}</td>
          </tr>
        ))}
        </tbody>
      </table>
        <button style={{backgroundColor: "limegreen", color: "white", border: "1px solid black"}} onClick={() => {setAcionador(acionador + 1)}}>resgatar dados</button>

      <h4>tabela de cidades</h4>
      <table border={4} style={{border: "2px solid green"}}>  
        <thead>   
          <tr>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
        {usuarios.map(usuario => (
          <tr>
            <td key={usuario.id}>{usuario.address.city}</td>
          </tr>
        ))}
        </tbody>
      </table>
        <button style={{backgroundColor: "limegreen", color: "white", border: "1px solid black"}} onClick={() => {setAcionador(acionador + 1)}}>resgatar dados</button>
    </div>
  );
}