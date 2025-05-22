import "./Card.css"

export default function Card({ endereco, nome, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={endereco} alt={nome} />
      <h4>{nome}</h4>
    </div>
  )
}