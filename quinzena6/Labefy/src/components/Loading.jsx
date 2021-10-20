import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from '@mui/material/Typography';

export default function Animations() {
  return (
    <div style={{ display: "flex", flexDirection:"column", width:"100%", alignItems: "center"  }}>
    <Box sx={{ width: 1000}}>
      <Typography variant="h2">
        <Skeleton animation="wave" />
      </Typography>
      <Typography variant="h2">
        <Skeleton animation="wave" />
      </Typography>
      <Typography variant="h2">
        <Skeleton animation="wave" />
      </Typography>
      <Typography variant="h2">
        <Skeleton animation="wave" />
      </Typography>
      <Typography variant="h2">
        <Skeleton animation="wave" />
      </Typography>
    </Box>
    </div>

  );
}
