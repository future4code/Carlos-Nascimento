//INTERPRETAÇÃO DE CÓDIGO

// 1)
//      a. Matheus Nachtergaele

// 2)
//      a.  console.log(cachorro) ->    {idade: 3, raca: "SRD", nome: "Juca"}
//          console.log(gato) ->        {idade: 3, raca: "SRD", nome: "Juba"}
//          console.log(tartaruga) ->   {idade: 3, raca: "SRD", nome: "Jubo"}

//      b. A sintaxe dos tres pontos chama-se spread e faz um clone do objeto

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
