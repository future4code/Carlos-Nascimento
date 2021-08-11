// verificarPar(16, imprimirMensagem)

// verificarImpar(13, function(){
//    console.log("Sim, é ímpar")
// })

// numerosAleatorios.map(imprimirMensagem)

const nomesDosPokemons = pokemons.map(extrairNome)

// console.log(nomesDosPokemons)

const mensagens = numerosAleatorios.map(gerarMensagem)

// console.log(mensagens)

const pokemonsDeGrama = pokemons.filter(buscarPokemonsDeGrama)

// console.log(pokemonsDeGrama)

const numerosMaioresQueDez = numerosAleatorios.filter(
   numero => numero > 10
)

// console.log(numerosMaioresQueDez)

const numerosPares = numerosAleatorios.filter(
   (numero) => { return numero % 2 === 0 }
)

// console.log(numerosPares)

const produtosDeLimpeza = produtos
   .filter(buscarProdutosDeLimpeza)
   .map(extrairNome)

// console.log(nomesDosProdutosDeLimpeza)

// console.log(
//    numerosAleatorios
//       .filter(buscarPares)
//       .map(gerarObjeto)
// )