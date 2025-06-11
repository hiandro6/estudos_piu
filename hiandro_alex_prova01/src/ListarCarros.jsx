import { carros } from "./dados_carro" /* aqui eu importo o array de objetos do arquivo js */
export default function ListarCarros() {  /* crio a funcao do componente e já exporto ela */
    
    
    
    return (
        <div>
            <h1>todos os carros: </h1>
            <ol> {/* crio uma lista ordenada onde cada elemento li será um carro */}
            {carros.map(carro => ( /* acessando o array carros com a função map e definindo a variável tenporária carro */
                <li> <p>modelo = {carro.modelo} | cor = {carro.cor}</p></li> /* aqui a variável temporária se torna o carro de cada posição da lista, acesso os atributos exigidos .modelo e .cor e os exibo dentro de um parafráfo */
            ))}
            </ol>
        </div>

    )
}