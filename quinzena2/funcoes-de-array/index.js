/////////////////////// INTERPRETAÇÃO DE CÓDIGO

// 1) Leia o código abaixo

/* const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
}) */

// a. O que vai ser impresso no console?
// será impresso um objeto{nome: xxx, apleido: xxx}, o índex desse objeto - de 0 a 2 - e o array "usuarios" completo

// 2) Leia o código abaixo

/* const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
];

const novoArrayB = usuarios.map((item, index, array) => {
  return item.nome;
});

console.log(novoArrayB); */

// a. O que vai ser impresso no console?

    // resposta: será impresso um array de strings contendo a chave "nome" de cada objeto do array "usuários"







///////////////////// ESCRITA DE CÓDIGO

// 1)
// Dado o seguinte array de cachorrinhos que são clientes de um pet shop,
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

// a.
const extraiNomes = (pet) => pet.nome;
const nomeDosDogs = pets.map(extraiNomes);
/* console.log(nomeDosDogs);
 */
// b.
const extraiSalsichas = (pet) => pet.raca === "Salsicha";
const guardaSalsichas = pets.filter(extraiSalsichas);
/* console.log(guardaSalsichas);
 */
// c.

const extraiPoodles = (pet) => pet.raca === "Poodle";
const enviaMensagem = pets
  .filter(extraiPoodles)
  .map(
    (pet) =>
      `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
  );
/* console.log(enviaMensagem)
 */
// 2) Dado o seguinte array de produtos, realize as operações
// pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// a. Crie um novo array que contenha apenas o nome de cada item

const extraiNomeItens = produtos.map((item) => item.nome);
// console.log(extraiNomeItens);

// b. Crie um novo array que contenha um objeto com o nome e
// o preço de cada item, aplicando 5% de desconto em todos eles

const aplicaDesconto = (item) => {
  let itemComDesconto = item.preco * 0.05;
  item.preco = (item.preco - itemComDesconto).toFixed(2);
  return { nome: item.nome, preco: item.preco };
};

const produtosComDesconto = produtos.map(aplicaDesconto);
// console.log(produtosComDesconto)

// c. Crie um novo array que contenha apenas os objetos da categoria Bebidas

const extraiBebidas = produtos.filter((item) => item.categoria === "Bebidas");
//console.log(extraiBebidas)

// d. Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const extraiNomesYpe = produtos
  .map((item) => item.nome)
  .filter((item) => item.includes("Ypê"));
// console.log(extraiNomesYpe);

// e. Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
//    Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const extraiObjetosYpe = (objeto) => {
  return { nome: objeto.nome, preco: objeto.preco };
};
const geraFrase = (objeto) => objeto.nome.indexOf("Ypê") > -1;

const indicaCompra = produtos
  .map(extraiObjetosYpe)
  .filter(geraFrase)
  .map((item) => `Compre ${item.nome} por ${item.preco}`);

//console.log(indicaCompra);
