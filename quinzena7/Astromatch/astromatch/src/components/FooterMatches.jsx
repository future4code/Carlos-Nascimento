import React from "react";
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import home from "../img/home.svg";
import clear from "../img/clean.png";


const FooterMatchesComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  height: 90px;
  background-color: rgba(168, 10, 63, 1);

  .get-back, .clear {
    img {
      height: 40px;
      width: 40px;
      &:hover {
        transform: scale(1.2);
        transition: all 0.5s;
      }
    }
  }
`;

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
