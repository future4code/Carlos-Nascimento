import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";

const Arrow = styled.div`
  position: absolute;
  top: 2vh;
  left: 5vw;

  &:hover {
    color: green;
    transform: scale(1.1);
    transition: all 1s;
  }

  &:not(hover) {
    transition: all 1s;
  }
`;

export default function ArrowBack() {
  const history = useHistory();
  return (
    <Arrow >
      <ArrowBackIcon sx={{ fontSize: 48 }} onClick={(_) => history.goBack()} />
    </Arrow>
  );
}
