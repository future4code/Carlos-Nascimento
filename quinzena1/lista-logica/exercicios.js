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
  let altura = Number(prompt("Altura do retângulo"));
  let largura = Number(prompt("Largura do retângulo"));

  console.log(altura * largura);
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Digite o ano em que estamos"));
  let anoNasc = Number(prompt("Digite o ano de nascimento"));

  console.log(anoAtual - anoNasc);
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui

  let peso = Number(prompt("Peso"));
  let altura = Number(prompt("Altura"));

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
  const cores = [];
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
  // escreva seu código aqui
  let custo = Number(prompt("Qual o custo do espetaculo?"));
  let ingresso = Number(prompt("Qual o valor do ingresso?"));

  const total = custo / ingresso;

  console.log(total);
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let fraseUm = prompt("String 1");
  let fraseDois = prompt("String 2");

  let resultado = fraseUm.length == fraseDois.length ? true : false;
  console.log(resultado);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let fraseUm = prompt("String 1");
  let fraseDois = prompt("String 2");
  fraseUm = fraseUm.toLowerCase();
  fraseDois = fraseDois.toLowerCase();

  let resultado = fraseUm == fraseDois ? true : false;
  console.log(resultado);
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("ano atual"));
  let anoNasc = Number(prompt("ano de nascimento"));
  let anoEmissao = Number(prompt("emissao rg"));

  idade = anoAtual - anoNasc;
  rg = anoAtual - anoEmissao;

  const teste1 = idade <= 20 && rg >= 5 ? true : false;
  const teste2 = idade > 20 && idade <= 50 && rg >= 10 ? true : false;
  const teste3 = idade > 50 && rg >= 15 ? true : false;

  let resultado = teste1 || teste2 || teste3;

  console.log(resultado);
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let ano = prompt("ano");
  ano = Number(ano);

  let teste1 = ano % 400 == 0 ? true : false;
  let teste2 = ano % 4 == 0 ? true : false;
  let teste3 = ano % 100 == 0 ? true : false;

  let resultado = teste1 || (teste2 && !(teste3 && !teste1));

  console.log(resultado);
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  let idade = prompt("idade");
  let ensino = prompt("ensino");
  let disponivel = prompt("tem disponibilidade");

  idade.toLowerCase();
  ensino.toLowerCase();
  disponivel.toLowerCase();

  resultado = idade == "sim" && ensino == "sim" && disponivel == "sim" ? true : false;

  console.log(resultado);
}
