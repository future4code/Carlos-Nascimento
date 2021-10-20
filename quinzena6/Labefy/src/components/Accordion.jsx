import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useData } from "../context/StateContext";



export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const data = useData()
  const setNewTrack = data.setNewTrack
  const newTrack = data.newTrack
  const addNewTrackToPlaylist = data.addNewTrackToPlaylist
  const playlistId = data.playlistIdProps

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
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
            <form action="" name="novaFaixa" onSubmit = { e => e.preventDefault()}>
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
                Adicionar Faixa{" "}
              </button>
            </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
