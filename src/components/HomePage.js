import React, { Component } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                This is the Home Page
            </div>
        )
    }
}

export default HomePage 