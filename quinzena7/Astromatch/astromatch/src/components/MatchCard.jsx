import React from 'react'
import styled from 'styled-components'

const CardComponent = styled.div`
width: 100%;
height: 80px;
display: flex;
align-items: center;
padding: 10px;

img{
    border-radius: 99%;
    height: 100%;
    width: 80px;
    margin-left: 10px;
}
div{
    margin-left: 50px;
}


`

export default function MatchCard(props) {
    return (
        <CardComponent key={props.id}>
            <img src={props.img} alt="user" />
            <div>
                <h3>
                    {props.name}
                </h3>
            </div>

        </CardComponent>
    )
}
