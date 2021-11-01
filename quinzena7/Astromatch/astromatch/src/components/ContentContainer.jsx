import React from "react";
import { ContentComponent } from "../styles/styles";
import NoMoreMatches from "../components/NoMoreMatches";
import loadingImg from "../img/loading.gif";
import match from "../img/match.svg";


export default function ContentContainer(props) {
  return (
    <ContentComponent matchStamp={props.matchStamp}>
      {props.loading ? (
        <div className="loading">
          <img src={loadingImg} alt="carregando" id="loadingImg" />
        </div>
      ) : props.isOver ? (
        <NoMoreMatches />
      ) : (
        <div className="img-container">
          <h1>{props.user.name}</h1>
          <h2>{props.user.age} anos</h2>
          <img src={match} alt="loading.." className="match" />
          <img src={props.user.photo} alt="" className="main-pic" />
          <div className="description">
            <p>{props.user.bio}</p>
          </div>
        </div>
      )}
    </ContentComponent>
  );
}
