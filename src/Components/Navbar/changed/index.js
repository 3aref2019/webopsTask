import React, { Component } from 'react'
import styled, { css } from 'styled-components'








const Container = styled.div`
display: flex;
width: 100%;
height: 100px;
border: 1px solid blue;
flex-flow: row wrap;

`;

const Buttons = styled.button`

  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

`;

const HeaderImg = styled.img`
align-self:  flex-end ;
width: 100px;
height: 100px;
flex-grow: 1;

border: 2px solid black;

src: url(${props => props.src})`;


const Nav = styled.div`

width: 100px;
height: 100px;
flex-grow: 4;
margin: auto;


`;
 class Changed extends Component {
    render() {
        return (
           <Container>
           <HeaderImg></HeaderImg>
              <Nav>
              <Buttons>aaa</Buttons>
              <Buttons>bbb</Buttons> 
              <Buttons>ccc</Buttons>
              </Nav>
              
           </Container>
        )
    }
}
export default  Changed