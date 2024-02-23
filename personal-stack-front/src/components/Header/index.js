import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'
import Session from './Session'
import SessionDropdown from './SessionDropdown'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
    width: 100vw;
    height: 64px;
    border-bottom: solid 1px #f1f1f1;

    display: flex
`

const Button = styled.div`

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
            <Button onClick={ () => {setActive(!isActive)}   }  ><StyledLink to={"/Account"}> <Session /> </StyledLink></Button>
            <SessionDropdown  displayVisibility={isActive ? "flex" : "none"}/>  
        </HeaderContainer>
    )
}

export default Header;