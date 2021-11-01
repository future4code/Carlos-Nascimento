import React from 'react'
import cancel from "../img/cancel.svg";
import ok from "../img/ok.svg";
import profile from "../img/profile.png";
import list from "../img/list.png";
import {useHistory} from 'react-router-dom'

import { FooterComponent } from '../styles/styles';

export default function Footer(props) {
   
    const history = useHistory()
    return (

        <FooterComponent>
          <div className="user-img">
            <img src={profile} alt="" className="user" />
          </div>
          <div className="buttons">
            <img src={cancel} alt="" onClick={props.getData} />
            <img src={ok} alt="" onClick={props.pichPerson}/>
          </div>
          <div className="matches">
            <img src={list} alt="veja seus matches" 
            onClick={_=>history.push("/matches")}
            />
          </div>
        </FooterComponent>
    )
}
