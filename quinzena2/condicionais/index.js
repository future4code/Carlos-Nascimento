// Exercício de interpretação de código

// 1)
//      a. O código solicita a entrada de um número via prompt e o trata, em seguida testa se o resto da divisão por dois
//          é igual a zero, imprimindo duas mensagens, uma para cada resultado, verdadeiro ou falso
//      b. Números pares
//      c. Números ímpares

// 2)
//      a. altera o valor da variável preço de acordo com a Fruta dada como entrada
//      b. O preço da fruta Maçã é R$ 2.25
//      c. O preço da fruta Pêra é R$ 5

// 3)
//      a. Solicitando a entrada de um número via prompt e convertendo-o para number
//      b. Em caso de "10": Esse número passou no teste!, em caso de "-10" nada seria impresso.
//      c. Haverá erro de variável não definida no console.log(mensagem) pois a váriável "mensagem" está declarada dentro do escopo do if e não está acessível fora dela.

// Escrita de código

// 1)

/* const podeDirigir =
  Number(prompt("Qual a sua idade?")) >= 18
    ? console.log("Você pode dirigir!")
    : console.log("Você não pode dirigir :/");  */

let idadeUsuario = prompt("Qual a sua idade?");
idadeUsuario = Number(idadeUsuario);

if (idadeUsuario >= 18) {
  console.log("Você pode dirigir");
} else {
  console.log("Você não pode dirigir");
}

// 2)

let turno = prompt(
  "Qual tuno você estuda? Digite M, para manhã; T para tarde; N para Noite"
);
turno = turno.toLowerCase();

if (turno === "m") {
  console.log("Bom Dia!");
} else if (turno === "t") {
  console.log("Boa Tarde!");
} else if (turno === "n") {
  console.log("Boa Noite!");
} else {
  console.log("insira um turno válido");
}

let novoTurno = prompt(
  "Qual tuno você estuda? Digite M, para manhã; T para tarde; N para Noite"
);

// 3)

novoTurno = novoTurno.toLowerCase();

switch (novoTurno) {
  case "m":
    console.log("Bom Dia!");
    break;
  case "t":
    console.log("Boa Tarde!");
    break;
  case "n":
    console.log("Boa Noite!");
    break;
  default:
    console.log("insira um turno válido");
    break;
}

// 4)

let genero = "fantasia";
let ingresso = 15;

let respGenero = prompt("Qual o genero do filme?").toLowerCase() === genero;
let respIngresso = Number(prompt("Qual o preço do ingresso?")) <= ingresso;

if (respGenero && respIngresso) {
  console.log("Bom Filme!");
} else {
  console.log("Escolha outro filme :(");
}

//////////// DESAFIO

// 1)

let genre = "fantasia";
let ticket = 15;

let respGenre = prompt("Qual o genre do filme?").toLowerCase() === genre;
let respTicket = Number(prompt("Qual o preço do ingresso?")) <= ticket;

if (respGenre && respTicket) {
  let snack = prompt("Qual lanchinho vai escolher? :)");
  console.log(`Bom Filme! Aproveite seu lanchinho ${snack}`);
} else {
  console.log("Escolha outro filme :(");
}

// 2)

const infos = {
  nomeCompleto: "",
  tipo: "",
  etapa: "",
  categoria: 0,
  quantidade: 0,
  preco: 0,
  total: 0,
  etapaPorExtenso: "",
};

const precos = {
  sf: [1320, 880, 550, 220],
  dt: [660, 440, 330, 170],
  fi: [1980, 1320, 880, 330],
};
const dolar = 4.1;

function getInfo(infos) {
  infos.nomeCompleto = prompt("Insira teu nome completo");
  infos.tipo = prompt(
    "Insira o tipo de jogo: DO para doméstico, IN para internacional"
  ).toLowerCase();
  infos.etapa = prompt(
    "Insira a Etapa do torneio: SF = Semifinal; DT = Terceiro Lugar; FI = Final"
  ).toLowerCase();
  infos.categoria = Number(prompt("Qual a categora? 1, 2, 3 ou 4"));
  infos.quantidade = Number(prompt("Quantos Ingressos no total?"));

  infos.total =
    infos.tipo === "do"
      ? testeDo(infos, precos)[0] * dolar
      : testeDo(infos, precos)[0];

  switch (infos.etapa) {
    case "sf":
      infos.etapaPorExtenso = "Semi Final";
      break;
    case "dt":
      infos.etapaPorExtenso = "Disputa do Terceiro Lugar";
      break;
    case "fi":
      infos.etapaPorExtenso = "Final";

    default:
      infos.etapaPorExtenso = infos.etapa;
      break;
  }
}

function testeDo(infos, precos) {
  if (infos.etapa === "sf") {
    if (infos.categoria === 1) {
      return [infos.quantidade * precos.sf[0], (infos.preco = precos.sf[0])];
    } else if (infos.categoria === 2) {
      return [infos.quantidade * precos.sf[1], (infos.preco = precos.sf[1])];
    } else if (infos.categoria === 3) {
      return [infos.quantidade * precos.sf[2], (infos.preco = precos.sf[2])];
    } else {
      return [obj.quantidade * precos.sf[3]], (infos.preco = precos.sf[3]);
    }
  } else if (infos.etapa === "dt") {
    if (infos.categoria === 1) {
      return [infos.quantidade * precos.dt[0], (infos.preco = precos.dt[0])];
    } else if (infos.categoria === 2) {
      return [infos.quantidade * precos.dt[1], (infos.preco = precos.dt[1])];
    } else if (infos.categoria === 3) {
      return [infos.quantidade * precos.dt[2], (infos.preco = precos.dt[2])];
    } else {
      return [obj.quantidade * precos.dt[3], (infos.preco = precos.dt[3])];
    }
  } else if (infos.etapa === "fi") {
    if (infos.categoria === 1) {
      return [infos.quantidade * precos.fi[0], (infos.preco = precos.fi[0])];
    } else if (infos.categoria === 2) {
      return [infos.quantidade * precos.fi[1], (infos.preco = precos.fi[1])];
    } else if (infos.categoria === 3) {
      return [infos.quantidade * precos.fi[2], (infos.preco = precos.fi[2])];
    } else {
      return [obj.quantidade * precos.fi[3], (infos.preco = precos.fi[3])];
    }
  }
}

getInfo(infos);

console.log(`

---- DADOS DA COMPRA -----
Nome do cliente: ${infos.nomeCompleto}
Tipo de jogo: ${infos.tipo === "do" ? "Nacional" : "Internacional"}
Etapa do jogo: ${infos.etapaPorExtenso}
Categoria: ${infos.categoria}
Quantidade de Ingressos: ${infos.quantidade} ingressos

----- VALORES --------
Valor do Ingresso: ${infos.tipo === "in" ? "U$ " : "R$ "} ${infos.tipo === "in" ? (infos.preco).toFixed(2) : (infos.preco * dolar).toFixed(2)}
Valor total: ${infos.tipo === "in" ? "U$ " : "R$ "} ${infos.total.toFixed(2)}

`);
