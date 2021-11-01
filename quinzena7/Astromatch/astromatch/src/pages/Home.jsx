import React, { useEffect } from "react";

import { HomeComponent, PageContainer } from '../styles/styles.js'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useData } from "../context/context";
import ContentContainer from "../components/ContentContainer";


export default function Home() {
  const data = useData()
  
  const matchStamp = data.matchStamp
  const isOver = data.isOver
  const pichPerson = data.pichPerson
  const getData = data.getData
  const loading = data.loading
  const user = data.user

  useEffect(() => {
    getData();
  }, []);

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
