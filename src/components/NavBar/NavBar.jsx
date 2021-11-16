import React from 'react'
import {Header, Nav, LogoWrapper, SideNav} from './styles'
import logo from '../../assets/logo.svg'

function NavBar() {
    return (
        <Header>
            <LogoWrapper>
                <img src={logo} alt="Nanny Share Logo"/>
            </LogoWrapper>

            <Nav>
                <p><a href="/">Create Your Nanny Share</a></p>
                <p><a href="/">Browse Shares</a></p>
                <p><a href="/">Our Story</a></p>
            </Nav>

            <SideNav>
            <button>Become a Nanny Share Host</button>
            <p><a href="/">Sign In</a></p>
            </SideNav>
        </Header>
    )
}

export default NavBar
