import React from "react";
import logo from "../img/logo.svg";
import { HeaderComponent } from "../styles/styles";

export default function Header() {
  return (
    <HeaderComponent>
      <img src={logo} alt="logomarca" />
    </HeaderComponent>
  );
}
