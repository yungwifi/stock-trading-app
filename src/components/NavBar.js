import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavContainer = styled.div`
width: 100vw;
height: 10vh;
background-color: gray;
display: flex;
align-items: left;
a{
    margin-top: 2.5vh;
    margin-right: 30px;
    margin-left: 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    text-decoration: none;
}
a:hover{
    color: white;
}`
const Logo = styled.div`
    font-family: 'Gill Sans';
    font-size: 25px;
    display: flex;
    align-items: center;
`

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavContainer >
                    <Logo >
                        <Link to="/"> Stocks From Ya Boi </Link>
                    </Logo>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/stocks">Stocks</Link>
                </NavContainer>
            </div>
        )
    }
}

export default NavBar