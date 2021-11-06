import React from "react";
import {useHistory} from 'react-router-dom'
import home from "../img/home.svg";
import clear from "../img/clean.png";
import { FooterMatchesComponent } from "../styles/styles";



export default function FooterMatches(props) {
  const history = useHistory()

  return (
    <FooterMatchesComponent>
      <div className="get-back">
        <img src={home} alt="inicio"
        onClick={_=>{history.push("/")}}
        />
      </div>

      <div className="clear">
        <img src={clear} alt="resetar"
        onClick={props.clear}
        />
      </div>
    </FooterMatchesComponent>
  );
}
