import styled from 'styled-components'
import Logo from '../../Core/Logo'
import Menu from '../../Core/Menu'
import Session from '../../Core/Session'
import SessionDropdown from '../../Core/SessionDropdown'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
    width: 100vw;
    height: 64px;
    
    border-bottom: solid 1px #f1f1f1;
    
    display: flex;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`


function Header(){
    const [isActive, setActive] = useState(false)

    return (
        <HeaderContainer>
            <StyledLink to={"/Home"} style={{ textDecoration: 'none' }} ><Logo /></StyledLink>
            <Menu />
            <StyledLink to={"/Account"}> <Session /> </StyledLink>
        </HeaderContainer>
    )
}

export default Header;