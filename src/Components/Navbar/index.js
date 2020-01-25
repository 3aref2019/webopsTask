import React, { Component } from 'react'
import  Basic from './Basic/index'
import  Changed from './changed/index'

class Navbar extends Component {
    render() {
        return (
            <div>
                <Basic />
                <Changed />
            </div>
        )
    }
}
export default  Navbar