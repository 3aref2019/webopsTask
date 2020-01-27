import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Paragraph = styled.p`
flex-basis:auto;
  

  font-size:30px;
color:black;
  
`
const Container = styled.div`
display: flex;
  width: 100%;
  height: 100px;
  

`
 class Middle extends Component {
    render() {
        return (
          <Container>
              <Paragraph>WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.</Paragraph>
          </Container>
        )
    }
}
export default  Middle