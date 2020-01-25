import React, { Component } from 'react'

import styled, { css } from 'styled-components'

const Buttons = styled.button`

  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  
`;
const Container = styled.div`
  text-align: center;
`;
 class buttons extends Component {
    render() {
        return (
             <Container>
    <Buttons> </Buttons>
    
  </Container>
        )
    }
}





export default  buttons