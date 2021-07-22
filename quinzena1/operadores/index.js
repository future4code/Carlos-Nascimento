// 1)
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// resultado: false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)
//resultado false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
// resultado: false

console.log("d. ", typeof resultado)
// resultado é um boleano

// 2)
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
//Será concatenado os números porque todo prompt retorna uma string


/* ESCRITA DE CÓDIGO */

// 1)

let usuario = Number(prompt("Qual a sua idade?"))
let amigo = Number(prompt("Qual a idade do seu amigo?"))
resultado = usuario > amigo

console.log("Sua idade é maior que a do seu melhor amigo?", resultado)


// 2)

let numero = Number(prompt("Digite um numero par"))

console.log(numero%2)
/* Ao inserir número pares o resto da divisão 
por dois sempre será 0, pois todo par é multiplo de 2. 
Do contrário, o resto da divisão será 1 */

// 3)

let idade = Number(prompt("Qual sua idade?"))

console.log("Sua idade em meses é ", idade*12)
console.log("Sua idade em dias é ", idade*365)
console.log("Sua idade em horas é ", idade*24*365)

// 4)

let primeiro = Number(prompt("Primeiro Numero"))
let segundo = Number(prompt("Segundo numero"))

let maior = primeiro > segundo
let igual = primeiro == segundo
let divisivel = (primeiro%segundo == 0)
let divisivelSegundo = (segundo%primeiro == 0)

console.log("O primeiro numero é maior que segundo? ", maior)
console.log("O primeiro numero é igual ao segundo? ", igual)
console.log("O primeiro numero é divisível pelo segundo? ",divisivel)
console.log("O segundo numero é divisível pelo primeiro? ", divisivelSegundo)

