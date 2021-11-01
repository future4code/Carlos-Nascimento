import React from "react";
import { NoMatches } from "../styles/styles";

export default function NoMoreMatches(props) {
  return (
    <NoMatches>
      <h2>Oops!</h2>
      {props.noMatches === true ? (
        <h4>
          Você ainda não achou o seu tcham :( <br /> Continue tentando!
        </h4>
      ) : (
        <h4>
          todas os seus matches foram esgotados.
          <br />
          <br />
          Vá até a aba de matches e confira todos os seus pretendentes!
          <br />
          Se quiser continuar, recomece os teus matches por lá mesmo.
        </h4>
      )}
    </NoMatches>
  );
}
