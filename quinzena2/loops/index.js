///// INTERPRETAÇÃO DE CÓDIGO

// 1)

/* let valor = 0;
for (let i = 0; i < 5; i++) {
  valor += i;
}
console.log(valor);
 */

// O código acima está somando à variável "valor" o valor correspondente à iteração da variável de controle "i"

// 2)
//      a. será impresso, individualmente, todos os numeros do array maiores que 18
//      b. pode ser feito, basta utilizar o protótipo "keys"

// 3) O código adiciona asteriscos a uma string de acordo com o valor da variável de controle quantidadeAtual
//     que está limitada ao valor inserido pelo usuário. No caso de quantidadeTotal == 4, serão 4 linhas com a quantidade
//      de asteriscos crescente até a ultima linha

/// ESCRITA DE CÓDIGO

// 1)

const petName = () => {
  let amountOfPet = Number(prompt("Quantos pets você tem?"));

  const namesOfThePets = (amountOfPet) => {
    const names = [];
    for (let i = 0; i < amountOfPet; i++) {
      names.push(prompt(`Digite o nome do seu pet número ${i + 1}`));
    }
    return console.log(names);
  };

  amountOfPet <= 0
    ? console.log("Você pode adotar um pet!")
    : namesOfThePets(amountOfPet);
};

// 2)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// a.
const valorOriginal = (array) => {
  for (numeros of array) {
    console.log(numeros);
  }
};

// b.
const valorDividido = (array) => {
  for (numeros of array) {
    console.log(numeros / 10);
  }
};

// c.
const valoresPares = (array) => {
  const pares = [];
  for (numeros of array) {
    numeros % 2 === 0 ? pares.push(numeros) : numeros;
  }
  console.log(pares);
};

// d.
const valoresStrings = (array) => {
  const strings = [];
  let i = 0;
  for (numero of array) {
    strings.push(`O elemento do index ${i} é: ${numero}.`);
    i++;
  }
  console.log(strings);
};

// e.
const valorMaiorMenor = (array) => {
  let maior = 0;
  for (numero of array) {
    numero > maior ? (maior = numero) : false;
  }

  let menor = maior;
  for (numero of array) {
    numero < menor ? (menor = numero) : false;
  }

  console.log(`O maior valor do array é ${maior} e o menor é ${menor}`);
};

// valorMaiorMenor(arrayOriginal)
// valoresStrings(arrayOriginal);
// valorOriginal(arrayOriginal)
// valorDividido(arrayOriginal)
// valoresPares(arrayOriginal)



/////// DESAFIOS