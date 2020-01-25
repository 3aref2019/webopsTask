import React, { Component } from 'react'
import  RightNav from './rightnav/RightNav'
import  LeftNav  from './leftnav/LeftNav'
import  Logo  from './Logo/Logo'
 class Basic extends Component {
    render() {
        return (
            <div>
              <RightNav />
              <Logo />
              <LeftNav />
            </div>
        )
    }
}
export default  Basic