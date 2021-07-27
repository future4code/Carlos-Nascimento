// INTERPRETACAO DE CÓDIGO

// 1)

let array
console.log('a. ', array) // Undefined

array = null
console.log('b. ', array) // Null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // 3

array[i+1] = 19
console.log('e. ', array) // [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // 9

// 2) Leia o codigo co atenção:

const frase = "Subi num ônibus em Marrocos"
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) 

// Qual sera o valor impresso no console se a entrada for "Subi num ônibus em Marrocos"?
// SUBI NUM ÔNIBUS EM MIRROCOS


// ESCRITA DE CÓDIGO

// 1)

let nomeDoUsuario = prompt("Insira aqui seu Nome")
let emailDoUsuario = prompt("Insira aqui seu E-mail")

console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-Vind@, ${nomeDoUsuario}!`)

// 2)

const comidas =[
    "Banana Real",
    "Salpicão",
    "Estrogonoff",
    "Coxinha",
    "Pudim"
]

console.log(comidas)

console.log("Essas são as minhas comidas preferidas: ")
/* for (let i = 0; i < comidas.length; i++){ console.log(comidas[i])}
 */

console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

let comidDoUsuario = prompt("Qual a sua comida preferida?")

comidas[2] = comidDoUsuario

console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])


// 3)

const listaDeTarefas = []

let tarefaUm = prompt("Digite sua primeira tarefa")
let tarefaDois = prompt("Digite sua segunda tarefa")
let tarefaTerceira = prompt("Digite sua terceira tarefa")

listaDeTarefas[0] = tarefaUm
listaDeTarefas[1] = tarefaDois
listaDeTarefas[2] = tarefaTerceira

console.log(listaDeTarefas)

let indice = Number(prompt("Digite o índice da tarefa já realizada"))
listaDeTarefas.splice(indice,1)
console.log(listaDeTarefas)

// DESAFIO

// 1)

let fras3 = prompt("Digite uma frase")

fras3 = fras3.trim()
arrayFrase = fras3.split(" ")
console.log(arrayFrase)

// 2)

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(frutas.indexOf("Abacaxi"), frutas.length)








