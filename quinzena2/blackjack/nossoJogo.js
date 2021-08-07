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

function nossoJogo() {
  const cartasUsuario = [];
  const cartasComputador = [];

  const comecarRodada = () => {
    for (let i = 0; i <=1; i++) {
      cartasUsuario.push(comprarCarta());
      cartasComputador.push(comprarCarta());
    }
    const somaPontos = (array) => {
      let resultado = 0;
      for (let i = 0; i < array.length; i++) {
        resultado += array[i].valor;
      }
      return resultado;
    };
  
    let pontosUsuario = somaPontos(cartasUsuario);
    let pontosComputador = somaPontos(cartasComputador);
    const resultado = () => {
      res = ''
      if (pontosUsuario > pontosComputador) {
        res = "Usuário venceu!";
      } else if (pontosUsuario < pontosComputador) {
        res = "Computador venceu!";
      } else {
        res = "Empate!";
      }
      return res;
    };
  
    console.log(`
    Usuário - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} -- Pontuação: ${pontosUsuario}
    Computador - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} -- Pontuação: ${pontosComputador}
    ${resultado()}
  
  `);
  };


  /// Começo do jogo!
  confirm("Vamos jogar um jogo?")
    ? comecarRodada()
    : console.log("Xii, correu :(");
  //////

}
nossoJogo();
