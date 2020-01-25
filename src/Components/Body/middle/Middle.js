import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Para = styled.Para`
  width: 100px;
  height: 100px;
  border: 1px solid blue;
  src: url(${props => props.src});
`
 class Middle extends Component {
    render() {
        return (
            <Para />
        )
    }
}
export default  Middle