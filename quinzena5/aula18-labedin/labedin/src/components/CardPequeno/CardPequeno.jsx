import React from "react";
import { smallCard as Small } from "../Styles/styles";

export default function CardPequeno(props) {
  return (
    <Small>
      <img src={props.img} alt="Foto do perfil" />
      <p>
        <strong>{props.campo}: </strong> {props.texto}
      </p>
    </Small>
  );
}
