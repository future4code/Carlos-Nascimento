import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";


const HeaderComponent = styled.div`
  height: 60px;
  width: 100%;
  background-color: rgba(168, 10, 63, 1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px 0 10px;

  img {
    height: 100px;
    width: 300px;
  }
`;

export default function Header() {
  return (
    <HeaderComponent>
      <img src={logo} alt="logomarca" />
    </HeaderComponent>
  );
}
