import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	margin-right: 15px;
    height: 20px;
    width: 20px;
`

export function IconeSalvo(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickSalvo}/>
	</IconContainer>
}
