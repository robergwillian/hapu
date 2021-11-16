import React from 'react'
import Hero from '../../components/Hero/Hero'
import NavBar from '../../components/NavBar/NavBar'
import {HeaderWrapper} from "./styles"

function Header() {
    return (
        <HeaderWrapper>
           <NavBar/>
           <Hero/>
        </HeaderWrapper>
    )
}

export default Header
