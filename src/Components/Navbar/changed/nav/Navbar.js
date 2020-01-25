import React, { Component } from 'react'
import styled from 'styled-components'


const Buttons = styled.button`
 
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  
`;
const Container = styled.div`
  text-align: center;


`

 class NavBar extends Component {
    render() {
        return (
 <div className="Container">
   <Buttons>360 Planner</Buttons>   
    <Buttons>Her</Buttons>
    <Buttons>His</Buttons>
    <Buttons>The Wedding</Buttons>
    </div>
      
        )
    }
}
export default NavBar