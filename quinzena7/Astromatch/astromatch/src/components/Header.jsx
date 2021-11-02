import React, {useEffect, useState} from "react";
import logo from "../img/logo.svg";
import { HeaderComponent } from "../styles/styles";
import { useAuth } from "../context/authContext";

export default function Header() {
  const auth = useAuth();
  const Logout = auth.Logout;
  const user = auth.user
  const [name, setName] = useState()
  
  const handleLogut = async () => {
    await Logout();
    window.location.href = "/";
  };

  useEffect(() => {
    setName(user.name.split(" ")[0])
  },[])

  return (
    <HeaderComponent>
      <div className="user-name">
        <p>Bem vindo,</p>
       <strong><p>{name}</p></strong> 
      </div>
      <img src={logo} alt="logomarca" />
      <button onClick={_=>{ window.confirm("Deseja mesmo sair?") && handleLogut()}}>Logout</button>
    </HeaderComponent>
  );
}
