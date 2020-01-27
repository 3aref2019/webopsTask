import React, { Component } from 'react'
import styled, { css } from 'styled-components'




const Container = styled.div`
display: flex;
width: 100%;
height: 100px;
border: 1px solid blue;
flex-flow: row wrap;
background-color:black;
position: fixed;
left: 0;
bottom: 0;
color:white;


`;
const LeftDiv = styled.div`
align-self:flex-start;
height: 100px;
border: 1px solid blue;
flex-grow: 1;
display: flex;
flex-flow: row wrap;
`;
const Lefh = styled.h1`
font-size:20px;
align-self:flex-start;
font-size:25px;
flex-grow: 1;

`;

const RightDiv = styled.div`


height: 100px;
border: 1px solid blue;
flex-grow: 1;

`;

const Cent = styled.div`


height: 100px;
border: 1px solid blue;
flex-grow: 1;

`;


const JSButton = styled.button`

height: 100px;
border: 1px solid blue;

`;

const Span = styled.span`
color:blue;

`;
 class Footer extends Component {
    render() {
        return (
            <Container>
                <LeftDiv>

                    <Lefh>Weds360</Lefh>
                    </LeftDiv>
                <Cent>© Copyright <Span>Plus360</Span>. All Rights Reserved</Cent>
                <RightDiv>Terms & ConditionsPrivacy Policy

                </RightDiv>
            </Container>
        )
    }
}

export default Footer