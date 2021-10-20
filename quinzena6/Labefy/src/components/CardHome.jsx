import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { keyframes } from "styled-components";

const ScaleIn = keyframes`
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }`


const HomeCard = styled.div`
  height: 30vh;
  width: 30vw;
  padding: 2.5rem;
  background-color: ${(props) => props.color || "black"};
  color: whitesmoke;
  border-radius: 10px;
  padding: 20px;

  text-align: center;
  padding: 50px;

  animation-name: ${ScaleIn};
  animation-duration: 1s;

  img {
    width: 100px;
    height: 100px;
  }

  &:hover {
    transform: scale(1.1);
    transition: all 1s;
    cursor: pointer;
  }

  &:not(:hover) {
    transition: all 1s;
  }

`;


export default function CardHome(props) {

  let history = useHistory()
  

  return (
      <HomeCard color={props.color}
      onClick= { _ => history.push(props.local)}
      >
        <h1>{props.titulo}</h1>
        <img src={props.img} alt={props.alt} />
        <h3>{props.descricao}</h3>

      </HomeCard>
  );
}
