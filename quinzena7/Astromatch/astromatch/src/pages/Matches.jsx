import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HomeComponent } from "../styles/Home";
import Header from "../components/Header";
import Matches from "../components/MatchCard";
import axios from "axios";
import FooterMatches from "../components/FooterMatches";
import NoMoreMatches from "../components/NoMoreMatches";
import loadingImg from '../img/loading.gif'

const MatchesComponent = styled.div`
  height: 100%;
  width: 100%;

  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fdfcfb;

`;

export default function MatchesPage() {
  const [matches, setMatches] = useState([]);
  const [noMatches, setNoMatches] = useState(false)
  const [reload, setReload] = useState(true)
  const [loading, setLoading] = useState(false)

  const getMatches = async () => {
      setLoading(true)
    await axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-nascimento/matches"
      )
      .then((res) => {
          setMatches(res.data.matches)
          matches.length === 0 && setNoMatches(true)
          setLoading(false)

        });
  };

  const resetMatches = async () =>{
    setLoading(true)
      await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-nascimento/clear").then(
          res => {
              setReload(!reload);
              setLoading(false)
          }

      )
  }

  useEffect(() => {
    getMatches()
  }, [reload]);

  return (
    <HomeComponent>
      <Header />
      <MatchesComponent>
          {
              loading ?
            <div className="loading">
                <img src={loadingImg} alt="carregando" />
            </div>
            :
              matches.length === 0 ?
              <NoMoreMatches noMatches={noMatches}/>
            :
            matches.map( person =>{
                return(
                    <Matches key={person.id} img={person.photo} name={person.name}/>
                )
            })

          }
      </MatchesComponent>
      <FooterMatches clear={resetMatches}/>
    </HomeComponent>
  );
}
