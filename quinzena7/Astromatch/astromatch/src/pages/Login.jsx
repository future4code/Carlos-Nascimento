import React, { useEffect } from 'react'
import styled from 'styled-components'
import logo from '../img/logo.svg'
import googleImg from '../img/google.svg'

import { useAuth } from '../context/authContext'
import { useHistory } from 'react-router'

const LoginComponent = styled.div`

display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
background-color: rgba(168,10,63,1);



.logo{
    img{
        height: 200px;
        width: 200px;
    }
}

button{
    height: 60px;
    width: 200px;
    border-radius: 10px;
    border: none;
    background-color: #7e1e3e;
    color: whitesmoke;
    display: flex;
    align-items: center;

    &:hover{
    background-color: #740c2f;
    transition: all .5s;
}

    img{
        width: 50px;
        height: 50px;
    }
}

`

export default function Login() {
    const history = useHistory()
    const { SigninWithGoogle, user } = useAuth()

    useEffect(() => {
        user && history.push("/home")
    }, [user])


    return (

        <LoginComponent>
            <div className="logo">
                <img src={logo} alt="logomarca" />
            </div>

            <button
            onClick={SigninWithGoogle}
            >
                <img src={googleImg} alt="googleLogo" className="google" />
                Fazer login com o Google
            </button>
            
        </LoginComponent>
    )
}
