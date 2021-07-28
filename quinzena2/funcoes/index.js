// Interpretacao de codigo

// 1)
//   a) console.log(minhaFuncao(2))  => 10
//      console.log(minhaFuncao(10)) => 50

//   b) Nada apareceria no console pois não o resultado não é chamado pela função console.log

// 2)
//   a) Esta função recebe uma string, transforma-a toda em minúscula
//      e retorna true ou false caso haja a palavra "cenoura" contida
//   b) i.   true
//      ii.  true
//      iii. false = cenouras está no plural

// ESCRITA DE CÓDIGO

// 1)
//      a)

function minhasInfos() {
  console.log("1a. Meu nome é Vini, tenho 26 anos e sou estudante");
}

minhasInfos();

//      b)

function inforPorParametros(nome, idade, cidade, prof) {
  console.log(
    `1b. Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${prof}`
  );
}

let nome = prompt("Qual o seu nome?");
let idade = Number(prompt("Qual a sua idade?"));
let cidade = prompt("Qual a sua cidade?");
let profissao = prompt("Qual a sua profissao?");

inforPorParametros(nome, idade, cidade, profissao);

// 2)
//      a)

function Soma(num1, num2) {
  return console.log(`2a. ${num1 + num2}`);
}

Soma(5, 8);

//      b)

function Maior(num1, num2) {
  let maior = num1 >= num2 ? true : false;
  console.log(`2b. ${maior}`);
}
Maior(13, 12);

//      c)

function isPar(num) {
  console.log(`2c. ${num % 2 == 0 ? true : false}`);
}

isPar(5);

//      d)

function tamanhoMaiuscula(msg) {
  let maiuscula = msg.toUpperCase();
  let tamanho = msg.length;
  return console.log(`2d. ${tamanho} ${maiuscula}`);
}

tamanhoMaiuscula("Em seguida, peça par");

// 3)

function toSum(num1, num2) {
  return num1 + num2;
}

function toSubtract(num1, num2) {
  return num1 - num2;
}

function toDivide(num1, num2) {
  return num1 / num2;
}

function toMultiply(num1, num2) {
  return num1 * num2;
}

function callOperations() {
  let number1 = Number(prompt("Digite o primeiro numero"));
  let number2 = Number(prompt("Digite o segundo numero"));

  return console.log(
    `3.
        Números inseridos: ${number1} e ${number2}
        Soma: ${toSum(number1, number2)}
        Diferença: ${toSubtract(number1, number2)}
        Multiplicação: ${toMultiply(number1, number2)}
        Divisão: ${toDivide(number1, number2)}
        
        `
  );
}

callOperations();

// ========================================================

// DESAFIO

// 1)
//      a)

const imprime = (valor) => console.log(`Desafio 1. ${valor}`);

//      b)

const some = (num1, num2) => imprime(num1 + num2);
some(5, 9);

// 2)

function Pitagoras(b, c) {
  b = Math.pow(b, 2);
  c = Math.pow(c, 2);
  return Math.sqrt(`${b + c}`);
}

console.log(`Desafio 2. ${Pitagoras(5, 10).toFixed(2)}`);
