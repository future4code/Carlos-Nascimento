/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

function comprarCarta() {
  // Cria array de cartas
  const cartas = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"];

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)];

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)];

  let valor;

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11;
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10;
  } else {
    // Se nao for uma das letras, só converte a string para número
    valor = Number(numero);
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    texto: numero + naipe,
    valor: valor,
  };

  return carta;
}
const cartasUsuario = [];
const cartasPC = [];

function primeiraRodada() {
  for (let i = 0; i <= 1; i++) {
    cartasUsuario[i] = comprarCarta();
    cartasPC[i] = comprarCarta();
  }
  vrfCartasIniciais();
}

const vrfCartasIniciais = () => {
  (cartasUsuario[0].valor === cartasUsuario[1].valor) === 11 ||
  (cartasPC[0].valor === cartasPC[1].valor) === 11
    ? primeiraRodada()
    : inicioDoJogo();
};

const somaPontos = (objeto) => {
  let resultado = 0
  resultado = +objeto.valor;
  return resultado;
};

const mostraCartas = (elemento) => elemento.texto;

const novaRodada = (array) => {
  array.push(comprarCarta());
  inicioDoJogo();
};

let pergunta = (cartasUsuario, cartasPC) => confirm(
  `
 Suas cartas são ${cartasUsuario.map(mostraCartas).join(" ")}. 
 A carta revelada do computador é ${cartasPC[0].texto}.
 Deseja comprar mais uma carta?
`
);

function inicioDoJogo() {
  pergunta(cartasUsuario, cartasPC) ? novaRodada(cartasUsuario) : false;
  while (cartasUsuario.map(somaPontos) < 21) {
    novaRodada(cartasUsuario);
  }
  fimDeJogo();
}

const fimDeJogo = () => {
  console.log("Fim de jogo");
};

primeiraRodada();
