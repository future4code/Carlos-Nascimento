// INTERPRETAÇÃO DE CÓDIGO

// ESCRITA DE CÓDIGO

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
.map((pet) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`);
console.log(enviaMensagem)