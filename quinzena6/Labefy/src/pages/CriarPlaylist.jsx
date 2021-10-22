import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useData } from "../context/StateContext";
import LinearIndeterminate from "../components/LoadingLinear";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ArrowBack from "../components/ArrowBack";
import { keyframes } from "styled-components";

const bounceIn = keyframes`
0% {
   -webkit-transform: translateY(-500px);
           transform: translateY(-500px);
   -webkit-animation-timing-function: ease-in;
           animation-timing-function: ease-in;
   opacity: 0;
 }
 38% {
   -webkit-transform: translateY(0);
           transform: translateY(0);
   -webkit-animation-timing-function: ease-out;
           animation-timing-function: ease-out;
   opacity: 1;
 }
 55% {
   -webkit-transform: translateY(-65px);
           transform: translateY(-65px);
   -webkit-animation-timing-function: ease-in;
           animation-timing-function: ease-in;
 }
 72% {
   -webkit-transform: translateY(0);
           transform: translateY(0);
   -webkit-animation-timing-function: ease-out;
           animation-timing-function: ease-out;
 }
 81% {
   -webkit-transform: translateY(-28px);
           transform: translateY(-28px);
   -webkit-animation-timing-function: ease-in;
           animation-timing-function: ease-in;
 }
 90% {
   -webkit-transform: translateY(0);
           transform: translateY(0);
   -webkit-animation-timing-function: ease-out;
           animation-timing-function: ease-out;
 }
 95% {
   -webkit-transform: translateY(-8px);
           transform: translateY(-8px);
   -webkit-animation-timing-function: ease-in;
           animation-timing-function: ease-in;
 }
 100% {
   -webkit-transform: translateY(0);
           transform: translateY(0);
   -webkit-animation-timing-function: ease-out;
           animation-timing-function: ease-out;
 }`;

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: whitesmoke;

  div {
    position: absolute;
    top: 20px;
    text-align: center;
  }

  input {
    width: 80vw;
    height: 10vh;
    border-style: none;
    background-color: rgba(19, 0, 97, 0.75);
    outline: none;
    font-size: 32px;
    color: ${(props) => props.color || "whitesmoke"};
    text-align: center;
    margin-top: 20px;

    &:disabled {
      background-color: gray;
    }
  }

  button {
    height: 50px;
    width: 100px;
    background-color: rgba(19, 0, 97, 0.75);
    border: none;
    border-radius: 5px;
    color: whitesmoke;
    font-size: 18px;

    margin-top: 20px;
    align-self: flex-end;

    &:hover {
      transition: all 1s;
      background-color: #07f107;
    }

    &:not(hover) {
      transition: all 1s;
    }

    &:disabled {
      background-color: gray;
    }
  }

  .feedbackMessage {
    animation-name: ${bounceIn};
    animation-duration: 1s;
    display: absolute;
    top: 30%;
  }

  .doubleIcon {
    animation-name: ${bounceIn};
    animation-duration: 1s;
    &:hover {
      transform: scale(1.5);
      transition: all 1s;
      color: green;
    }

    &:not(hover) {
      transition: all 1s;
    }
  }
`;

export default function CriarPlaylist() {
  const [nomeOk, setNomeOk] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [feedback, setFeedback] = useState("whitesmoke");

  const history = useHistory()

  const data = useData();
  const create = data.createPlaylist;
  const getPlaylists = data.getAllPlaylists;
  const setPlaylistName = data.setNewPlaylist;
  const playlistName = data.newPlaylist;
  const result = data.result;

  const test = result
    .map((value) => {
      return value.name;
    })
    .filter((value) => {
      return value.toLowerCase().includes(playlistName.toLowerCase());
    });

  async function LoadPage() {
    setVerifying(true);
    await getPlaylists().then((_) => setVerifying(false));
  }

  useEffect(() => {
    LoadPage();
  }, []);

  function handleAvaiability() {
    setVerifying(true);
    if (test.length >= 1) {
      setFeedback("#F5666E");
      setVerifying(false);
    } else {
      create();
      console.log("caiu no else");
      setFeedback("#07f107");
      setVerifying(false);
    }
  }

  return (
    <Formulario color={feedback}>
      <ArrowBack />
      {verifying && <LinearIndeterminate />}
      <div>
        <h1> Crie Agora sua playlist!</h1>
        <h3>Olha como é fácil</h3>
      </div>

      <label htmlFor="criarplaylist">Insira um nome divertido</label>
      {feedback === "#F5666E" && (
        <div className="feedbackMessage" style={{ color: "#F5666E" }}>
          <h3>Oops! alguém já teve essa ideia... vamos tentar de novo?</h3>
        </div>
      )}
      {feedback === "#07f107" && (
        <div className="feedbackMessage" style={{ color: "#07f107" }}>
          <h3>Uhuu! Vamos pra a próxima etapa!</h3>
        </div>
      )}
      <form name="criarplaylist" onSubmit={(e) => e.preventDefault()}>
        <input
          disabled={verifying}
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
      </form>
      <button disabled={verifying} type="submit" onClick={handleAvaiability}>
        Criar
      </button>

      {feedback === "#07f107" && (
        <DoubleArrowIcon
          className="doubleIcon"
          sx={{ color: "#07f107", fontSize: 48 }}
          onClick={ _ => history.push("/todas")}
        />
      )}
    </Formulario>
  );
}
