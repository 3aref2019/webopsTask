import React, { Component } from 'react'
import styled, { css } from 'styled-components'


const Container = styled.div`
display: flex;
width: 100%;
height: 100px;
border: 1px solid blue;
flex-flow: row wrap;

`;

const RightDiv = styled.div`

  width: 100px;
  height: 100px;
  flex-grow:4;
  margin: auto;
  flex-basis:auto
 `;

 const LeftDiv = styled.div`

 width: 100px;
 height: 100px;
 flex-grow: 4;
 flex-shrink:4
 margin: auto;
 align-self:  flex-start ;
 
 `;

 const HeaderImg = styled.img`

 width: 100px;
 height: 100px;
 flex-grow: 1;
 align-self:  center;
 border: 2px solid black;
 
 src: url(${props => props.src})`;

const Buttons = styled.button`
order: 2;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  margin: auto;
`;







 class Basic extends Component {
    render() {
        return (
           <Container>
<RightDiv >
<Buttons >Her</Buttons>
<Buttons  >His</Buttons>
<Buttons >Planning</Buttons>
    </RightDiv> 
<HeaderImg />
<LeftDiv >
<Buttons>aaa</Buttons>
<Buttons>bbb</Buttons>
<Buttons>ccc</Buttons>
</LeftDiv>

           </Container>
        )
    }
}
export default  Basic