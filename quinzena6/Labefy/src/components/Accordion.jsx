import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useData } from "../context/StateContext";
import styled from 'styled-components'

const AcordonContainer = styled.div`
margin: 20px;

input{
  border: none;
  width: 200px;
  margin: 5px;
  text-align: center;
  height: 30px;
  border-radius: 5px;
  
  &:focus{
    outline: none;
    background-color: #6a90e073;
    transition: all .5s;
  }
}

button{
  border: none;
  height: 30px;
  width: 100px;
  background-color: #6a8fe0a7;
  border-radius: 5px;
  color: #050530;


  &:hover{
    background-color: #6a90e073;
    transition: all .5s;
  }
}


`



export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const data = useData()
  const setNewTrack = data.setNewTrack
  const newTrack = data.newTrack
  const addNewTrackToPlaylist = data.addNewTrackToPlaylist
  const playlistId = data.playlistIdProps
  const setRemoved = data.setRemoved;
  const removed = data.removed;



  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <AcordonContainer>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >

          <Typography sx={{ color: "text.secondary" }}>
            Vamos adicionar mais músicas!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <form action="" name="novaFaixa" onSubmit = { e => {e.preventDefault(); setRemoved(!removed)}}>
              <input
                type="text"
                name="newTrackName"
                value={newTrack.name}
                placeholder="Nome da Faixa"
                onChange={(e) => setNewTrack({ ...newTrack, name: e.target.value })}
              />
              <input
                type="text"
                name="newTrackArtist"
                value={newTrack.artist}
                placeholder="Nome do Artista"
                onChange={(e) => setNewTrack({ ...newTrack, artist: e.target.value })}
              />
              <input
                type="text"
                name="newTrackURL"
                value={newTrack.url}
                placeholder="URL da música"
                onChange={(e) => setNewTrack({ ...newTrack, url: e.target.value })}
              />
              <button
                type="submit"
                name="submitTrack"
                onClick={(_) => addNewTrackToPlaylist(playlistId)}
              >
                {" "}
                Adicionar{" "}
              </button>
            </form>
        </AccordionDetails>
      </Accordion>
    </AcordonContainer>
  );
}
