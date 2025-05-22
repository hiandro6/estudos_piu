import Card from "./Card"
import './Galeria.css'
import img1 from "../assets/avatar.jpg"
import img2 from "../assets/daryl.jpg"
import img3 from "../assets/luffy.jpg"
import img4 from "../assets/oreaseca.jpg"
import img5 from "../assets/tiringa.jpg"
import img6 from "../assets/tony.jpg"

export default function Galeria({ selecionarPersonagem }) {
    const personagens = [
        {
          nome: "Aang",
          endereco: img1,
          descricao: "O último dobrador de ar e o Avatar destinado a restaurar o equilíbrio do mundo."
        },
        {
          nome: "Daryl",
          endereco: img2,
          descricao: "Um caçador habilidoso e sobrevivente endurecido do apocalipse zumbi."
        },
        {
          nome: "Luffy",
          endereco: img3,
          descricao: "Um jovem pirata com poderes elásticos que sonha em encontrar o One Piece."
        },
        {
          nome: "Orea Seca",
          endereco: img4,
          descricao: "Lendário contador de causos nordestinos, conhecido por sua língua afiada."
        },
        {
          nome: "Tiringa",
          endereco: img5,
          descricao: "Figura popular da internet, parceiro inseparável de Orea Seca, direto e engraçado."
        },
        {
          nome: "Tony Soprano",
          endereco: img6,
          descricao: "Chefão da máfia italiana que também lida com terapia e conflitos pessoais."
        }
      ]
    

    return (
        <>
            <h1>galeria de personagens</h1>
            <div className="cards">
            {personagens.map((personagem, index) => (
            <Card
                key={index}
                nome={personagem.nome}
                endereco={personagem.endereco}
                onClick={() => selecionarPersonagem(personagem)}
            />
            ))}
            </div>
        </>
    )
}