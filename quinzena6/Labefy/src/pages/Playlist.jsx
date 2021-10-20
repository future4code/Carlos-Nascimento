import React, { useEffect } from "react";
import { useData } from "../context/StateContext";
import styled from "styled-components";
import Loading from "../components/Loading";
import CardPlaylist from "../components/CardPlaylist";
import ArrowBack from "../components/ArrowBack";
import SearchAppBar from "../components/SearchBar";
import { useHistory } from "react-router";


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

  .tituloDePlaylist{
    width: 100%;
  }

  h1 {
    margin-top: 20px;
    text-align: center;
    height: 3em;
  }
`;

export default function Playlist() {
  const data = useData();
  const getPlaylists = data.getAllPlaylists;
  const loading = data.loading;
  const result = data.result;
  const query = data.query



  useEffect(() => {
    getPlaylists();
  }, []);

  function handleRendering() {
    if (loading === false) {
      return result.filter(
        value => {
         return value.name.toLowerCase().includes(query.toLowerCase())
        }
      )
      .map((value) => {
        if (result.length === 0) {
          return <h1>Ahh, não temos playlist ainda :/ </h1>;
        }
        return (
          <div className='tituloDePlaylist'>
            <CardPlaylist name={value.name} id={value.id}/>
          </div>
        );
      })
    } else if (loading === true || loading === "initial") {
      return <Loading />;
    }
  }

  return (
    <PlaylistsContainer>
      <ArrowBack />
      <SearchAppBar/>
      <div>
        <h1>Estas são as playlists que todo mundo está ouvindo!</h1>
      </div>
      {handleRendering()}

    </PlaylistsContainer>
  );
}
