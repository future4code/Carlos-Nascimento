import React from "react";
import styled from "styled-components";
import CardHome from "../components/CardHome";
import verPlaylist from "../img/5.png";
import criar from "../img/4.png";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  color: white;

  .titulo {
    text-align: center;
    width: 50%;
    
    h1{
      font-size: 4rem;
    }
  }

  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .creditos{
    position: absolute;
    bottom: 5px;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <div className="titulo">
        <h1>
          <i>LABEFY ™</i>
        </h1>

        <p>crie playlists de forma rápida e intuitiva.</p>
        <p>compartilhe com quem você ama.</p>
        <p>simples assim</p>
      </div>

      <div className="cards">
          <CardHome
            local="/criar"
            color="#F8666E"
            titulo="Criar Playlist"
            descricao="Crie Playlists personalizadas e espalhe pelo mundo"
            img={criar}
            alt="criar playlist"
          />

        <CardHome
          color="blue"
          local="todas"
          titulo="Veja todas as playlists"
          descricao="Ouça o que o mundo está ouvindo"
          img={verPlaylist}
          alt="ver playlists"
        />
      </div>
      <div className="creditos">
        <p>desenvolvido por carlos nascimento - turma banu 2021</p>
      </div>
    </HomeContainer>
  );
}
