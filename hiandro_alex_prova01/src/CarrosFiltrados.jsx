import { carros } from "./dados_carro" /* aqui eu importo o array de objetos do arquivo js */
export default function CarrosFiltrados() {  /* crio a funcao do componente e já exporto ela */
    
    const carrosNovos = carros.filter(carro => carro.ano > 2019) /* aqui eu crio uma constante cujo valor será a lista carros filtrada com a condicao de ano superior a 2019 */
    
    return (
        <div>
            <h1>carros com o ano superior a 2019: </h1>
            <ol> {/* crio uma lista ordenada onde cada elemento li será um carro */}
            {carrosNovos.map(carro => ( /* acessando o array (já filtrado com os carros novos) com a função map e definindo a variável tenporária carro */
                <li> <p>modelo = {carro.modelo} </p></li> /* aqui a variável temporária se torna o carro de cada posição da lista, acesso o atributo  .modelo e o exibo dentro de um parafráfo */
            ))}
            </ol>
        </div>

    )
}