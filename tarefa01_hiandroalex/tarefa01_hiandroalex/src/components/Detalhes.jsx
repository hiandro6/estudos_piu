
export default function Detalhes({ personagem }) {
    if (!personagem) {
      return (
        <div>
          <h3>detalhes do personagem</h3>
          <p>Nenhum personagem selecionado.</p>
        </div>
      )
    }
  
    return (
      <div>
        <h3>Detalhes do personagem</h3>
        <img src={personagem.endereco} alt={personagem.nome} />
        <h4>{personagem.nome}</h4>
        <p>{personagem.descricao}</p>
      </div>
    )
  }