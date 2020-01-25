import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const HeaderImg = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid blue;
  src: url(${props => props.src});
`

class Logo extends Component {
    render() {
        return (
            <div>
                <HeaderImg  />
            </div>
        )
    }
}
export default Logo