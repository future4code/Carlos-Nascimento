 //1) Analise o programa abaixo e diga o que será impresso no console,
// SEM EXECUTAR o programa.

/* let a = 10;
let b = 10;

console.log(b); // Resposta: 10

b = 5;
console.log(a, b); // Resposta: 10 5
 */


// 2) 2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

/* let a = 10;
let b = 20;
let c;
c = a; // c == 10
b = c; // b == 10
a = b; // a == 10

console.log(a, b, c); */ // Resposta 10 10 10

// 3) Analise o programa e sugira novos nomes para as variáveis

/* let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(Voce recebe ${t/p} por hora) */

// O programa recebe via prompt as horas trabalhadas e salario diário e retorna
// a divisão entre eles como o valor da hora trabalhada
// Alteraria as variáveis para:
// p > horasDia
// t > salarioDia



//------------  Escrita de Código -------------

// 1)

let nome
let idade
console.log(typeof nome, idade)

// Foi retornado "undefined" no console porque não atribuimos qualquer valor às variáveis, não podendo obter o seu tipo, portanto

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome, typeof idade)

// Foi retornado string e string, porque, imagino, que a entrada de dados via prompt seja apenas de strings

console.log(`Olá, ${nome}! Você tem ${idade} anos!`)


// 2) 

const perguntaAlpha = "Você tomou café hoje?"
const perguntaBravo = "Você saiu de casa hoje?"
const perguntaCharlie = "Você gosta de basquete?"

let respostaAlpha = prompt(perguntaAlpha)
let respostaBravo = prompt(perguntaBravo)
let respostaCharlie = prompt(perguntaCharlie)

console.log(perguntaAlpha + " - " + respostaAlpha)
console.log(perguntaBravo + " - " + respostaBravo)
console.log(perguntaCharlie + " - " + respostaCharlie)

// 3)

let a = 10
let b = 25


let c = a
a = b
b = c

console.log(`O novo valor de A é: ${a}, e o novo valor de B é: ${b}`)

//Desafio

let primeiroNum = prompt("Digite um número")
let segundoNum = prompt("Digite o segundo número")

primeiroNum = Number(primeiroNum)
segundoNum = Number(segundoNum)

const soma = primeiroNum + segundoNum
const mult = primeiroNum * segundoNum

console.log(`O primeiro somado ao segundo = ${soma}. O primeiro vezes o segundo = ${mult}`)







