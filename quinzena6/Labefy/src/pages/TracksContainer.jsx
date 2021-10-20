import React, { useEffect } from "react";
import { useData } from "../context/StateContext";
import styled from "styled-components";
import Loading from "../components/Loading";
import ArrowBack from "../components/ArrowBack";
import SearchAppBar from "../components/SearchBar";
import CardTrack from "../components/CardTrack";
import ControlledAccordions from "../components/Accordion";

const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: auto;

  color: whitesmoke;

  .tituloDeTrack {
    width: 100%;
  }

  h1 {
    margin-top: 20px;
    text-align: center;
    height: 3em;
  }
`;

export default function TracksContainer() {
  const data = useData();
  const getTracks = data.getPlaylistTracks;
  const loading = data.loading;
  const result = data.result;
  const query = data.query;
  const setPlaylisId = data.setPlaylistId;
  let playlistIdentifier = window.location.pathname.split("/")[2];

  useEffect(() => {
    getTracks(playlistIdentifier);
  }, []);

  function handleRendering() {
    if (loading === false) {
      return result
        .filter((value) => {
          return value.name.toLowerCase().includes(query.toLowerCase());
        })
        .map((value) => {
          if (result.length === 0) {
            return <h1>Ahh, não temos músicas ainda... Vamos começar? :/ </h1>;
          }
          return ( 
            <div className="tituloDeTrack" key={value.id}
            >
              <CardTrack
                name={value.name}
                trackIdentifier={value.id}
                playlistIdentifier={playlistIdentifier}
                artist={value.artist}
              />
            </div>
          );
        });
    } else if (loading === true || loading === "initial") {
      return <Loading />;
    }
  }

  return (
    <PlaylistsContainer>
      <ArrowBack />
      <SearchAppBar />
      <div>
        <ControlledAccordions></ControlledAccordions>
      </div>
      {handleRendering()}
    </PlaylistsContainer>
  );
}
