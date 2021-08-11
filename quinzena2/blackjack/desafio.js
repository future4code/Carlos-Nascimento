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
  let resultado = 0;
  for (carta of objeto) {
    resultado += carta.valor;
  }

  return resultado;
};

const mostraCartas = (elemento) => elemento.texto;

const novaRodada = (array) => {
  array.push(comprarCarta());
  somaPontos(cartasUsuario) > 21
    ? console.log(
        `Suas cartas são ${cartasUsuario
          .map(mostraCartas)
          .join(" ")}. Sua pontuação é ${somaPontos(
          cartasUsuario
        )}. Zói foi maior que a barriga, né? Perdeu, bê :(((`
      )
    : inicioDoJogo();
};

function inicioDoJogo() {
  confirm(
    `
           Suas cartas são ${cartasUsuario.map(mostraCartas).join(" ")}. 
           A carta revelada do computador é ${cartasPC[0].texto}.
           Deseja comprar mais uma carta?
          `
  )
    ? novaRodada(cartasUsuario)
    : fimDeJogo();
}

const fimDeJogo = () => {
  let somaUsuario = somaPontos(cartasUsuario);
  let somaPC = somaPontos(cartasPC);
  do {
    cartasPC.push(comprarCarta());
    somaPC = somaPontos(cartasPC);
  } while (somaPC < somaUsuario);

  const msgPcGanhou = `
   Suas cartas são ${cartasUsuario
     .map(mostraCartas)
     .join(" ")}. Sua pontuação é ${somaUsuario}.
   As cartas do Computador são ${cartasPC.map(mostraCartas).join(" ")}.
   It's dead, Jim :((( A máquina venceu
       `;

  const msgUsuarioGanhou = `
    Suas cartas são ${cartasUsuario
      .map(mostraCartas)
      .join(" ")}. Sua pontuação é ${somaUsuario}.
   As cartas do Computador são ${cartasPC
     .map(mostraCartas)
     .join(" ")}. A pontuação dele é ${somaPC}
   Você venceu!! Iuhaa
    `;
  const empate = `
    Suas cartas são ${cartasUsuario
      .map(mostraCartas)
      .join(" ")}. Sua pontuação é ${somaUsuario}.
   As cartas do Computador são ${cartasPC
     .map(mostraCartas)
     .join(" ")}. A pontuação dele é ${somaPC}
   Deu Empate!
    `;

  somaPC > 21 && somaUsuario < 21
    ? console.log(msgUsuarioGanhou)
    : console.log(msgPcGanhou);
  somaUsuario === somaPC ? console.log(empate) : false;
};

primeiraRodada();
