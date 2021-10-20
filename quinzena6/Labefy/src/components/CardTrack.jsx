import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { confirm } from "mui-confirm-modal";
import { useData } from "../context/StateContext";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const style = {
  width: 1050,
  bgcolor: "rgba(19,0,97,.75)",
  color: "whitesmoke",
  borderRadius: "5px",
};

export default function CardTrack(props) {

  const data = useData();
  const removeTrack = data.removeTrackFromPlaylist;
  const playListId = data.playlistIdProps

  const handleOnClick = async () => {
    if (
      await confirm({
        message:
          "Esta ação deletará esta música para sempre. Deseja continuar?",
      })
    ) {
      removeTrack(props.playlistIdentifier, props.trackIdentifier);
    } else {
      return;
    }
  };
  return (
    <PlaylistContainer >
      <Box sx={style} >
        <List >
          <ListItem  >
            <ListItemButton>
              <ListItemIcon>
                <PlayArrowIcon color="primary" />
              </ListItemIcon>
              <ListItemText  primary={props.name} />
              <ListItemText primary={props.artist} />
            </ListItemButton>
            <ListItemButton
              onClick={handleOnClick}
              sx={{ maxWidth: 20, margin: "0 auto" }}
            >
              <DeleteIcon />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </PlaylistContainer>
  );
}
