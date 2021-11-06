import React, { useEffect } from "react";

import { HomeComponent, PageContainer } from '../styles/styles.js'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useData } from "../context/context";
import ContentContainer from "../components/ContentContainer";
import { useAuth } from "../context/authContext.js";
import { useHistory } from "react-router";


export default function Home() {
  const data = useData()
  const auth = useAuth()
  const history = useHistory()
  
  const matchStamp = data.matchStamp
  const isOver = data.isOver
  const pichPerson = data.pichPerson
  const getData = data.getData
  const loading = data.loading
  const user = data.user
  const googleUser = auth.user

  useEffect(() => {
    !googleUser && history.push("/")
    getData();
  }, [googleUser]);

  return (
    <PageContainer>
      <HomeComponent  isOver={isOver}>
        <Header/>

        <ContentContainer
        loading={loading}
        user={user} 
        matchStamp={matchStamp}
        />

        <Footer 
        pichPerson={pichPerson} 
        getData={getData} />

      </HomeComponent>
    </PageContainer>
  );
}
