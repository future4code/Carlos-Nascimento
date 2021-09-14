import React from "react";
//import './ImagemButton.css'
import { buttonStyles as ButtonStyles } from "../Styles/styles";

function ImagemButton(props) {

    function handleClick() {
/*         document.getElementById("small-card").style.display = ''
 */    
        document.getElementsByClassName("small-card").style.display = 'flex'
        
}


  return (
    <ButtonStyles onClick={handleClick}>
      <img src={props.imagem} />
      <p>{props.texto}</p>
    </ButtonStyles>
  );
}

export default ImagemButton;
