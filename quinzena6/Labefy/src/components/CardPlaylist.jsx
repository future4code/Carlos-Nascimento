import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { confirm } from "mui-confirm-modal";
import { useData } from "../context/StateContext";
import { useHistory } from "react-router-dom";
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
`;

const style = {
  width: 1000,
  bgcolor: "rgba(19,0,97,.75)",
  color: "whitesmoke",
};

export default function CardPlaylist(props) {
  const data = useData();
  const removePlaylist = data.removePlaylist;
  const setPlaylistId = data.setPlaylistId;

  const history = useHistory();

  const handleOnClick = async () => {
    if (
      await confirm({
        message:
          "Esta ação deletará esta playlist para sempre Deseja continuar?",
      })
    ) {
      removePlaylist(props.id);
    } else {
      return;
    }
  };
  return (
    <PlaylistContainer>
      <Box sx={style}>
        <List>
          <ListItem key={props.id} >
            <ListItemButton
              onClick={(_) => {
                setPlaylistId(props.id);
                history.push("/tracks");
              }}
            >
              <ListItemIcon>
                <PlayArrowIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={props.name} />
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
