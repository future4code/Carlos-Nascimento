import React, { useEffect, useState } from "react";
import axios from "axios";

import match from "../img/match.svg";
import loadingImg from "../img/loading.gif";
import { HomeComponent, PageContainer } from '../styles/Home.js'
import NoMoreMatches from "../components/NoMoreMatches";
import Footer from "../components/Footer";
import Header from "../components/Header";



export default function Home() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [matchStamp, setMatchStamp] = useState(false);
  const [isOver, setisOver] = useState(false);

  const handleMatch = () =>{
    setMatchStamp(true);
    setTimeout(() => {
      getData()}, 3000) 
    }

  const handleNotMatch = () => {
     getData()
  }


  async function getData() {
    setLoading(true);
    setMatchStamp(false)
    await axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-nascimento/person"
      )
      .then((resp) => {
        setUser({ ...resp.data.profile });
        resp.data.profile === null && setisOver(true)
        setLoading(false);
          });
  }


  async function pichPerson() {
    await axios(
      'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-nascimento/choose-person',{
        method: 'post',
        data:{
          id: `${user.id}`,
          choice: true
        }
      }
    ).then(
      res =>{
        res.data.isMatch === true ? handleMatch() : handleNotMatch()
      }
    )
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageContainer>
      <HomeComponent matchStamp={matchStamp} isOver={isOver}>
        <Header/>
        <div className="content">
          {loading ? (
            <div className="loading">
              <img src={loadingImg} alt="carregando" id='loadingImg'/>
            </div>
          ) : (
            isOver ? 
            <NoMoreMatches/>
            :
            <div className="img-container">
              <h1>{user.name}</h1>
              <h2>{user.age} anos</h2>
              <img src={match} alt="" className="match" />
              <img src={user.photo} alt="" className="main-pic" />           
              <div className="description">
                <p>{user.bio}</p>
              </div>
            </div>
          )}
        </div>
        <Footer pichPerson={pichPerson} getData={getData}/>
      </HomeComponent>
    </PageContainer>
  );
}
