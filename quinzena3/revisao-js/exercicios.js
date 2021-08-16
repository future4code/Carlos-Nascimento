// EXERCÍCIO 01
function inverteArray(array) {
  const arrayInvertido = [];
  for (i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i]);
  }

  return arrayInvertido;
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  numerosParesElevadosADois = array
    .filter((elemento) => elemento % 2 === 0)
    .map((elemento) => (elemento = Math.pow(elemento, 2)));

  return numerosParesElevadosADois;
}
// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const apenasPares = array.filter((elemento) => elemento % 2 === 0);
  return apenasPares;
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maior = 0;
  for (i = 0; i < array.length; i++) {
    array[i] > maior ? (maior = array[i]) : false;
  }
  return maior;
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length;
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true;
  const booleano2 = false;
  const booleano3 = !booleano2;
  const booleano4 = !booleano3;

  let teste1 = booleano1 && booleano2 && !booleano4;
  let teste2 = (booleano1 && booleano2) || !booleano3;
  let teste3 = (booleano2 || booleano3) && (booleano4 || booleano1);
  let teste4 = !(booleano2 && booleano3) || !(booleano1 && booleano3);
  let teste5 =
    (!booleano1 && !booleano3) || (!booleano4 && booleano3 && booleano3);

  return (arrayDeTestes = [teste1, teste2, teste3, teste4, teste5]);
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  numerosPares = [];
  let controle = 0;
  for (i = 0; controle < n; i++) {
    if (i % 2 === 0) {
      numerosPares.push(i);
      controle++;
    }
  }
  return numerosPares;
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  let teste1 = a === b && a === c && b === c;
  let teste2 = a != b && a != c && b != c;
  if (teste1) {
    return "Equilátero";
  } else if (teste2) {
    return "Escaleno";
  } else {
    return "Isósceles";
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maior;
  let menor;

  num1 > num2 && num1 != num2 ? ((maior = num1), (menor = num2)) : ((maior = num2), (menor = num1));
  num2 === num1 ? ((maior = num2), (menor = num1)) : false;

  let ehDivisivel = maior % menor === 0;
  let diff = maior - menor;
  diff < 0 ? (diff *= -1) : false;

  const saida = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: ehDivisivel,
    diferenca: diff,
  };

  return saida;
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  const arrayOriginal = array;

  if (arrayOriginal.length <= 2) {
    return arrayOriginal.sort((n1, n2) => n1 - n2);
  } else {
    const extraiMaiorEMenor = (array) => {
      let maior = 0;
      for (elemento of array) {
        if (elemento >= maior) {
          maior = elemento;
        }
      }

      let menor = maior;
      for (elemento of array) {
        if (elemento <= menor) {
          menor = elemento;
        }
      }
      return { maior: maior, menor: menor };
    };

    const maiorMenor = extraiMaiorEMenor(arrayOriginal);
    console.log(maiorMenor);

    let indexMaior = arrayOriginal.indexOf(maiorMenor.maior);
    let indexMenor = arrayOriginal.indexOf(maiorMenor.menor);

    arrayOriginal.splice(indexMaior, 1);
    arrayOriginal.splice(indexMenor, 1);

    const objFinal = extraiMaiorEMenor(arrayOriginal);
    return [objFinal.maior, objFinal.menor];
  }
}

// EXERCÍCIO 11
function ordenaArray(array) {
  let tamanho = array.length;
  const arrayOrdenado = [];
  const arrayAuxiliar = array;

  const extraiMenor = (array) => {
    let menor = 999;
    array.forEach((valor) => {
      if (valor <= menor) {
        menor = valor;
      }
    });
    arrayOrdenado.push(menor);
    let index = arrayAuxiliar.indexOf(menor);
    arrayAuxiliar.splice(index, 1);
  };

  while (arrayOrdenado.length < tamanho) {
    extraiMenor(arrayAuxiliar);
  }
  return arrayOrdenado;
}

ordenaArray([36, 12, 56, 7, 3]);

// EXERCÍCIO 12
function filmeFavorito() {
  return {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const filme = filmeFavorito();

  return `Venha assistir ao filme ${filme.nome}, de ${
    filme.ano
  }, dirigido por ${filme.diretor} e estrelado por ${filme.atores
    .map((ator) => ator)
    .join(", ")}.`;
}
imprimeChamada();
// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  let largura = lado1;
  let altura = lado2;
  let perimetro = 2 * (lado1 + lado2);
  let area = lado1 * lado2;
  return {
    largura: largura,
    altura: altura,
    perimetro: perimetro,
    area: area,
  };
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const novoObj = { ...pessoa, nome: "ANÔNIMO" };
  return novoObj;
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  return arrayDePessoas.filter((valor) => valor.idade >= 18);
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  return arrayDePessoas.filter((valor) => valor.idade < 18);
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  return array.map( valor => valor*2)
}


// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  return array.map( valor => valor*2).map( valor => valor.toString())

}

// EXERCÍCIO 17C
function verificaParidade(array) {
  return array.map( valor => valor%2===0? `${valor} é par`: `${valor} é ímpar`)
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

  const autorizadas = (objeto) =>{
    if (objeto.altura >= 1.5 && objeto.idade > 14 && objeto.idade <= 60){
      return objeto
    }
    
  }

  const novoObj =  pessoas.filter(autorizadas)
  return novoObj
}



// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

  const naoAutorizadas = (objeto) =>{
    if (!(objeto.altura >= 1.5 && objeto.idade > 14 && objeto.idade <= 60)){
      return objeto
    }
    
  }

  const novoObj =  pessoas.filter(naoAutorizadas)
  console.log(novoObj)
  return novoObj
}
retornaPessoasNaoAutorizadas([
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
])

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {}

// EXERCÍCIO 20
function calculaSaldo(contas) {}
