import React, { useEffect } from "react";
import { HomeComponent } from "../styles/styles";
import Header from "../components/Header";
import Matches from "../components/MatchCard";
import FooterMatches from "../components/FooterMatches";
import NoMoreMatches from "../components/NoMoreMatches";
import loadingImg from "../img/loading.gif";
import { MatchesComponent } from "../styles/styles";
import { useData } from "../context/context";
import { useAuth } from "../context/authContext";
import { useHistory } from "react-router";

export default function MatchesPage() {

  const data = useData()
  const auth = useAuth()
  const history = useHistory()

  const loading = data.loading
  const matches = data.matches
  const noMatches = data.noMatches
  const resetMatches = data.resetMatches
  const getMatches = data.getMatches
  const reload = data.reload
  const googleUser = auth.user


  useEffect(() => {
    !googleUser && history.push("/")
    getMatches();
  }, [reload, googleUser]);

  return (
    <HomeComponent>
      <Header />
      <MatchesComponent>
        {loading ? (
          <div id="loading">
            <img src={loadingImg} alt="carregando" />
          </div>
        ) : matches.length === 0 ? (
          <NoMoreMatches noMatches={noMatches} />
        ) : (
          matches.map((person) => {
            return (
              <Matches key={person.id} img={person.photo} name={person.name} />
            );
          })
        )}
      </MatchesComponent>
      <FooterMatches clear={resetMatches} />
    </HomeComponent>
  );
}
