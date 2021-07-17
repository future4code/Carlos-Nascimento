// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt("Digite o primeiro número");
  const num2 = prompt("Digite o segundo número");

  console.log(Number(num1) + Number(num2));
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt("Digite sua mensagem");

  console.log(mensagem);
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  let altura = prompt("Altura do retângulo");
  let largura = prompt("Largura do retângulo");

  console.log(altura * largura);
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = prompt("Digite o ano em que estamos");
  let anoNasc = prompt("Digite o ano de nascimento");

  anoAtual = Number(anoAtual);
  anoNasc = Number(anoNasc);

  console.log(anoAtual - anoNasc);
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui

  let peso = prompt("Peso");
  let altura = prompt("Altura");

  peso = Number(peso);
  altura = Number(altura);

  const imc = peso / (altura * altura);
  console.log(imc);
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  let nome = prompt("Nome");
  let idade = prompt("Idade");
  let email = prompt("email");

  idade = Number(idade);

  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}
// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  var cores = [];
  cores[0] = prompt("Qual sua primeira cor favorita");
  cores[1] = prompt("Qual sua segunda cor favorita");
  cores[2] = prompt("Qual sua terceira cor favorita");

  console.log(cores);
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let frase = prompt("Cite uma frase");

  console.log(frase.toUpperCase());
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let custo = prompt("Qual o custo do espetaculo?");
  let ingresso = prompt("Qual o valor do ingresso?");
  custo = Number(custo);
  ingresso = Number(ingresso);

  const total = custo / ingresso;

  console.log(total); // escreva seu código aqui
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let fraseUm = prompt("String 1");
  let fraseDois = prompt("String 2");

  fraseUm.length == fraseDois.length ? console.log(true) : console.log(false);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let fraseUm = prompt("String 1");
  let fraseDois = prompt("String 2");
  fraseUm = fraseUm.toLowerCase();
  fraseDois = fraseDois.toLowerCase();

  fraseUm == fraseDois ? console.log(true) : console.log(false);
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual = prompt("ano atual");
  let anoNasc = prompt("ano de nascimento");
  let anoEmissao = prompt("emissao rg");

  anoAtual = Number(anoAtual);
  anoNasc = Number(anoNasc);
  anoEmissao = Number(anoEmissao);

  idade = anoAtual - anoNasc;
  rg = anoAtual - anoEmissao;

  if (idade <= 20 && rg >= 5) {
    console.log(true);
  } else if (idade > 20 && idade <= 50 && rg >= 10) {
    console.log(true);
  } else if (idade > 50 && rg >= 15) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let ano = prompt("ano");
  ano = Number(ano);

  let teste1 = ano % 400 == 0 ? true : false;
  let teste2 = ano % 4 == 0 ? true : false;
  let teste3 = ano % 100 == 0 ? true : false;

  if (teste1) {
    console.log(true);
  } else if (teste2) {
    if (teste3 && !teste1) {
      console.log(false);
    } else console.log(true);
  } else {
    console.log(false)
  }
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  var labenu = [];

  let idade = prompt("idade");
  let ensino = prompt("ensino");
  let disponivel = prompt("tem disponibilidade");

  idade.toLowerCase();
  ensino.toLowerCase();
  disponivel.toLowerCase();

  idade == "sim" && ensino == "sim" && disponivel == "sim"
    ? console.log(true)
    : console.log(false);
}
