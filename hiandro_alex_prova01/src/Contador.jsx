import { useState } from "react";

export default function Contador() {
    let [contagem, setContagem] = useState(0) /* aqui crio o useState, é o valor que será manipulada e exibida na tela dinamicamente*/

    return (
        <div>
            <h1>componente 1:</h1>
            <button onClick={()=> {setContagem(contagem+1)}} /* aqui chamo o método onClick e uso uma arrow function para aumentar 1 na minha contagem todo vez que o botão for clicado */
            style={{
                width: (contagem > 10 ? "500px" : "300px"), /* aqui estou definindo a largura do botão. se a contagem for > 10, a largura é 500px, caso contrário(tamanho inicial já que o useState é iniciado como 0 e 0<10) será 300px */
                height: (contagem > 10 ? "200px" : "100px"), /* aqui  é o memsmo processo da largura, mas com a altura, mudando de 100px para 200px quando o valor ultrapassar 10 */
                backgroundColor: "green" /* definindo a cor de fundo do botão para verde, para facilitar a visualização */
            }}
            >encrementar</button>

            <h2>o valor atual é {contagem}</h2>

            <button onClick={()=> {setContagem(contagem-1)}} /* aqui chamo o método onClick e uso uma arrow function para diminuir 1 na minha contagem todo vez que o botão for clicado */
            style={{
                width: (contagem < 0 ? "150px" : "300px"), /* estou definindo a largura do botão. se a contagem for < 0, a largura é 150px, caso contrário(tamanho inicial já que o useState é iniciado como 0 e 0 não é menor que 0) será 300px */
                height: (contagem < 0 ? "50px" : "100px"), /* aqui  é o memsmo processo da largura, mas com a altura, mudando de 100px para 50px quando o valor for negativo (x < 0) */
                backgroundColor: "red" /* definindo a cor de fundo do botão para vermelho, para facilitar a visualização */
            }}
            >decrementar</button>
        </div>
    )
}