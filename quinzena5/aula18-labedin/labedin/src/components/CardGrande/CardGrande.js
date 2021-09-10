import React from "react";
//import './CardGrande.css'

import { bigCard as Big, smallCard as Small} from "../Styles/styles.js";

function CardGrande(props) {

  return (
    <Big >
      <img src={props.imagem} />
      <div>
        <h4>{props.nome}</h4>
        <p>{props.descricao}</p>
      </div>
    </Big>
  );
}

export default CardGrande;
