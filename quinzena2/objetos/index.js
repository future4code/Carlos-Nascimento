//INTERPRETAÇÃO DE CÓDIGO

// 1)
//      a. Matheus Nachtergaele

// 2)
//      a.  console.log(cachorro) ->    {idade: 3, raca: "SRD", nome: "Juca"}
//          console.log(gato) ->        {idade: 3, raca: "SRD", nome: "Juba"}
//          console.log(tartaruga) ->   {idade: 3, raca: "SRD", nome: "Jubo"}

//      b. A sintaxe dos tres pontos chama-se spread e faz um clone do objeto

// 3)

/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a. false
   undefined

b. O valor retornado foi undefined porque não existe essa propriedade no objeto

*/

// ESCRITA DE CÓDIGO

// 1) a.
const pessoa = {
  nome: "Carlos Vinicius",
  apelidos: ["Vini", "Carlitos", "Carlinhos"],
};

const Apresentar = (obj) => {
  return console.log(
    `1) Oi!, eu sou ${obj.nome}, mas pode me chamar de ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}`
  );
};

// b.

const pessoaB = { ...pessoa, apelidos: ["Jamba", "Jambeiro", "Vina"] };

Apresentar(pessoaB);

// 2)

const obj1 = {
  nome: "Carlos Vinicius",
  idade: 26,
  profissao: "Sysadmin",
};

const obj2 = {
  nome: "Alana Evelin",
  idade: 23,
  profissao: "Pedagoga",
};

const Retorno = (obj) => {
  return console.log("2) ", [
    obj.nome,
    obj.nome.length,
    obj.idade,
    obj.profissao,
    obj.profissao.length,
  ]);
};

Retorno(obj2);

// 3)

var carrinho = [];

const limao = {
  nome: "Limao",
  disponibilidade: true,
};
const morango = {
  nome: "Morango",
  disponibilidade: true,
};
const pinha = {
  nome: "Pinha",
  disponibilidade: true,
};

const encheCarrinho = (obj) => carrinho.push(obj);
encheCarrinho(limao);
encheCarrinho(morango);
encheCarrinho(pinha);

console.log("3) " + carrinho);
console.log("3) ", typeof carrinho[0], typeof carrinho[1], typeof carrinho[2]);

//DESAFIO

// 1)

const Inquerito = () => {
  let nomeInquerito = "Vnicius"; //prompt("Qual o teu nome?");
  let idadeInquerito = 26; //prompt("Qual a tua idade?");
  let profissaoInquerito = "sysadmin"; //prompt("Qual a tua profissao?");

  return {
    nome: nomeInquerito,
    idade: idadeInquerito,
    profissao: profissaoInquerito,
  };
};

let resultado = Inquerito();
console.log(resultado, typeof resultado);

const filme1 = {
  nome: "O Show de Truman",
  anoLancamento: 1998,
};

const filme2 = {
  nome: "A Origem",
  anoLancamento: 2010,
};

// 2)

const comparaFilme = (obj1, obj2) => {
  let antes = obj1.anoLancamento < obj2.anoLancamento ? true : false;
  let mesmoAno = obj1.anoLancamento == obj2.anoLancamento ? true : false;

  return antes
    ? console.log(`O primeiro filme foi lançado antes do segundo? ${antes}`)
    : console.log(
        `O primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno}`
      );
};

comparaFilme(filme1, filme2);

// 3)

const controle = (nomeDaFruta) => {
  const novoCarrinho = carrinho;
  let i = novoCarrinho.indexOf(nomeDaFruta);
  const frutaObj = { ...novoCarrinho[i], disponibilidade: !novoCarrinho[i].disponibilidade };
  novoCarrinho.splice(i, 0, frutaObj); // insere o novo objeto no indice original, que o fará ficar à frente do anterior
  novoCarrinho.splice(i + 1, 1); // Remove o objeto anterior que está +1 posição em relação à original
  return novoCarrinho;
};

carrinho = controle(limao);
console.log("Desafio 3) ", carrinho);
