import React from "react";
import { useState } from "react";

import styled from "styled-components";
import instagramImg from "../../img/instagram.svg";
import facebookImg from "../../img/facebook.svg";
import twitterImg from "../../img/twitter.svg";

const Compartilhar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 5px;
  padding-right: 5px;
  margin: 10px;

  img {
    width: 20px;
    height: 20px;

    &:hover {
      opacity: 0.5;
      transition: all 0.2s;
    }
  }
`;

const Mensagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function CompartilharComponent() {

  const [compartilhado, setCompartilhado] = useState(false)
  const [redeSocial, setRedeSocial] = useState('')

  const mostrarMensagem = (rede) => {
    setCompartilhado(true)
    setRedeSocial(rede)
    console.log(`Post compartilhado no ${rede}`)
};

  let mensageDoCompartilhamento

  if(compartilhado){
    mensageDoCompartilhamento = <Mensagem><p>{`Foto compartilhada no ${redeSocial}.`} <i>Olha essa foto linda!</i></p></Mensagem>
  }

  return (
    <Compartilhar>
      <img
        src={instagramImg}
        alt="Compartilhar no Instagram"
        onClick={ () => mostrarMensagem("Instagram")}
      />
      <img
        src={twitterImg}
        alt="Compartilhar no Twitter"
        onClick={() => mostrarMensagem("Twitter")}
      />
      <img
        src={facebookImg}
        alt="Compartilhar no Facebook"
        onClick={ () => mostrarMensagem("Facebook")}
      />
        {mensageDoCompartilhamento}
    </Compartilhar>
  );
}
