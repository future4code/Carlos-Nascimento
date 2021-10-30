import React from 'react'
import styled from 'styled-components'

const HomeComponent = styled.div`
display: flex;
flex-direction: column;
height: 80vh;
width: 40vw;
//border: solid red 1px;
background-color: #DBCEF7;
box-shadow: 5px 5px 20px #4a358d;
overflow: hidden;

.header{
    height: 80px;
    width: 100%;
    background-color: #EFEBFE;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 10px;
}

.content{
    height: 100%;
    width: 100%;
    border: solid 1px red;

}

`


export default function Home() {
    return (
        <HomeComponent>
            <div className="header">
            </div>

            <div className="content">
                <div className="arrow-right">
                    <h1> seta </h1>
                </div>
                <div className="arrow-left">
                    <h1>seta</h1>
                </div>

            </div>
        </HomeComponent>
    )
}
