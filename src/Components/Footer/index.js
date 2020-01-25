import React, { Component } from 'react'
import styled, { css } from 'styled-components'



import Left from './left/Left'
import Center from './middle/Center'
import Right from './right/Right'
 class Footer extends Component {
    render() {
        return (
            <div>
                <Left />
                <Center />
                <Right />
            </div>
        )
    }
}

export default Footer