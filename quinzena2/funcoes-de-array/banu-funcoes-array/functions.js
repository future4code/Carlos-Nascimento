const verificarPar = (numero, callback) => {

   if (numero % 2 === 0) {
      const resultado = numero / 2
      callback(resultado)
   }
}

const imprimirMensagem = (valor) => {
   console.log("O resultado da sua conta é:", valor)
}

const verificarImpar = (numero, processarImpar) => {
   if (numero % 2 === 1) {
      processarImpar(numero)
   }
}

function extrairNome(objeto) {
   return objeto.nome
}

function gerarMensagem(valor, posicao, array) {
   return `O elemento ${posicao} do array com ${array.length} elementos é ${valor}`
}

const buscarPokemonsDeGrama = (pokemon) => {
   return pokemon.tipo === "grama"
}

const buscarProdutosDeLimpeza = (produto) => {
   return produto.categoria === "Limpeza"
}

const buscarPares = numero => numero % 2 === 0

const gerarObjeto = numero => {
   return { numero }
}