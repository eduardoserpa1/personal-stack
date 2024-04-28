import styled from 'styled-components'
import Logo from '../../Core/Logo'
import Menu from '../../Core/Menu'
import Session from '../../Core/Session'
import SessionDropdown from '../../Core/SessionDropdown'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
    width: 100%;
    height: 64px;
    
    border-bottom: solid 2px #efefef;
    
    display: flex;

    z-index:1;
    position:relative;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

function Header(){
    return (
        <HeaderContainer>
            <StyledLink to={"personal-stack/Home"} style={{ textDecoration: 'none' }} ><Logo /></StyledLink>
            <Menu />
        </HeaderContainer>
    )
}

export default Header;