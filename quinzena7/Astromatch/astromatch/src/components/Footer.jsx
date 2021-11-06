import React, { useEffect } from "react";
import cancel from "../img/cancel.svg";
import ok from "../img/ok.svg";
import profile from "../img/profile.png";
import list from "../img/list.png";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/authContext";

import { FooterComponent } from "../styles/styles";
import { useState } from "react";

export default function Footer(props) {
  const history = useHistory();
  const [user, setUser] = useState(profile)
  const googleUser = useAuth().user


  useEffect(() => {
    const profilePic = googleUser.avatar
    setUser(profilePic)
  },[])

  return (
    <FooterComponent>
      <div className="user-img">
        <img src={user} alt="" className="user" />
      </div>
      <div className="buttons">
        <img src={cancel} alt="" onClick={props.getData} />
        <img src={ok} alt="" onClick={props.pichPerson} />
      </div>
      <div className="matches">
        <img
          src={list}
          alt="veja seus matches"
          onClick={(_) => history.push("/matches")}
        />
      </div>
    </FooterComponent>
  );
}
