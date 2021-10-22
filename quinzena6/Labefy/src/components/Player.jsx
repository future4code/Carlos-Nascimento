import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";

export default function Player(props) {
  const muiTheme = createMuiTheme({});
  return (
    <ThemeProvider theme={muiTheme}>
      <AudioPlayer 
      src={props.url} 
      width="100%"
      autoplay={true}
      />
    </ThemeProvider>
  );
}
