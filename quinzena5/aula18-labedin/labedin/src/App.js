import React from "react";
// import './App.css';
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import { globalStyles as GlobalStyles } from "./components/Styles/styles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          nome="Astrodev"
          descricao="Oi, eu sou o Astrodev. Sou o chefe dos alunos da Labenu. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

        <CardPequeno
          img="https://image.flaticon.com/icons/png/512/747/747314.png"
          campo="E-mail"
          texto="email@labenu.com.br"
        />
        <CardPequeno
          img="https://image.flaticon.com/icons/png/512/1180/1180083.png"
          campo="Endereço"
          texto="Rua das espatódeas"
        />

      <h2>Sobre Mim</h2>
      <CardGrande
        imagem="https://avatars.githubusercontent.com/u/5132840?s=400&u=1186c3cac831cbff94c9971b1b1f6ec31b6809c3&v=4"
        nome="Carlos Vinicius"
        descricao='Sou sysadmin há 4 anos no Hospital Naval de Salvador, trabalhando com manutenção do parque de computadores e rede de servidores Lnux.
         Me apaixonei por programação desde que escrevi meu primeiro "Hello, World" em Pascal aos 17, e desde entao nunca parei de estudar. Hoje faço faculadde na área, estou em transição de carreira e 
         não vejo a hora de me tornar um desenvolvedor.'
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
