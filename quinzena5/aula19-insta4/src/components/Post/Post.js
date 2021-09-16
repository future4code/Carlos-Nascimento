import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import { IconeSalvo } from '../IconeSalvo/IconeSalvo'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeBandeiraPreta from '../../img/bookmarkBlack.svg'
import iconeBandeiraBranca from '../../img/bookmarkWhite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeCompartilhar from '../../img/compartilhar.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import SecaoCompartilhar from '../SecaoCompartilhar/SecaoCompartilhar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhar: false
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    })

    if(this.state.curtido){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }else{
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }

  }

  onClickSalvo = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickCompartilhar = () =>{
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvo

    if(this.state.salvo){
      iconeSalvo = iconeBandeiraPreta
    }else{
      iconeSalvo =   iconeBandeiraBranca
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhar){
      componenteCompartilhar = <SecaoCompartilhar />
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSalvo
        icone={iconeSalvo}
        onClickSalvo={this.onClickSalvo}
        />

        <IconeSalvo
        icone={iconeCompartilhar}
        onClickSalvo={this.onClickCompartilhar}
        />
      </PostFooter>
      {componenteCompartilhar}
      {componenteComentario}
    </PostContainer>
  }
}

export default Post