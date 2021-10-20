import axios from "axios";
import React, { createContext, useState, useContext } from "react";

const DataContext = createContext()

export default function StateContextProvider({ children }) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState("initial");
  const [newPlaylist, setNewPlaylist] = useState("");
  const [playlistIdProps, setPlaylistId] = useState("");
  const [newTrack, setNewTrack] = useState({ name: '', artist: '', url: ''});
  const [playlistName, setPlaylistName] = useState("")
  const [query, setQuery] = useState("")
  // const [ trackId, setTrackId] = useState("")


  async function searchPlaylist() {
    setLoading(true);
    await axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${playlistName}`,
        {
          headers: {
            authorization: "carlos-nascimento-banu",
          },
        }
      )
      .then((response) => {
          if(response.data.result.playlist.length === 0){
              setResult(["Playlist Não encontrada :("])
          }
        setResult(response.data.result.playlist);
        console.log(response.data.result.playlist);
        setLoading(false);
      });
  }

  async function getAllPlaylists() {
      setLoading(true)

    await axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,
        {
          headers: {
            authorization: "carlos-nascimento-banu",
          },
        }
      )
      .then((response) => {
        setResult(response.data.result.list)
        console.log('done')
        setLoading(false);
      })
  }
  
    async function getPlaylistTracks(PlId) {
        setLoading(true)
  
      await axios
        .get(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${PlId}/tracks`,
          {
            headers: {
              authorization: "carlos-nascimento-banu",
            },
          }
        )
        .then((response) => {
          setResult(response.data.result.tracks)
          console.log('done')
          setLoading(false);
        })
    }
  
    async function removeTrackFromPlaylist(playlistIdentifier, trackId) {
        setLoading(true)
  
      await axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistIdentifier}/tracks/${trackId}`,
          {
            headers: {
              authorization: "carlos-nascimento-banu",
            },
          }
        )
        .then((_) => {
          setLoading(false);
        })
    }
  
  async function createPlaylist() {
    await axios('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      method: 'post',
      headers: { authorization : 'carlos-nascimento-banu'},
      data: { name: `${newPlaylist}`}
    })
    .then(response => console.log(response))
  }


  async function addNewTrackToPlaylist(playlistId) {
    await axios(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, {
        method: 'post',
        headers: { authorization: "carlos-nascimento-banu" },
          data: {
            name: `${newTrack.name}`,
            artist:`${newTrack.artist}`,
            url:`${newTrack.url}`
          }
    }).then( response => console.log(response))
  }

  async function removePlaylist(playlistId) {
    await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,{
        method: "DELETE",
        headers: {
          authorization: "carlos-nascimento-banu",
        },
    })
  }

  return (
    <DataContext.Provider
      value =
      {{
        result,
        loading,
        setResult,
        setLoading,
        searchPlaylist,
        getAllPlaylists,
        setNewPlaylist,
        newPlaylist,
        setNewTrack,
        newTrack,
        createPlaylist,
        addNewTrackToPlaylist,
        removePlaylist,
        playlistName,
        setPlaylistName,
        playlistIdProps,
        setPlaylistId,
        query,
        setQuery,
        getPlaylistTracks,
        removeTrackFromPlaylist,
      }}>
      
      {children}

    </DataContext.Provider>
  );
}


export function useData(){
    const context = useContext(DataContext)
    const {
        result,
        setResult,
        loading,
        setLoading,
        searchPlaylist,
        getAllPlaylists,
        setNewPlaylist,
        newPlaylist,
        setNewTrack,
        newTrack,
        createPlaylist,
        addNewTrackToPlaylist,
        removePlaylist,
        playlistName,
        setPlaylistName,
        playlistIdProps,
        setPlaylistId,
        query,
        setQuery,
        getPlaylistTracks,
        removeTrackFromPlaylist,
      } = context

      return {
        result,
        setResult,
        loading,
        setLoading,
        searchPlaylist,
        getAllPlaylists,
        setNewPlaylist,
        newPlaylist,
        setNewTrack,
        newTrack,
        createPlaylist,
        addNewTrackToPlaylist,
        removePlaylist,
        playlistName,
        setPlaylistName,
        playlistIdProps,
        setPlaylistId,
        query,
        setQuery,
        getPlaylistTracks,
        removeTrackFromPlaylist
      }
}