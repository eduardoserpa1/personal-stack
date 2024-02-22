import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'
import Session from './Session'
import SessionDropdown from './SessionDropdown'
import { useEffect, useState } from 'react'

const HeaderContainer = styled.div`
    width: 100vw;
    height: 64px;
    border-bottom: solid 1px #f1f1f1;

    display: flex
`

const Button = styled.div`

`


function Header(){
    const [isActive, setActive] = useState(false)

    return (
        <HeaderContainer>
            <Logo />
            <Menu />
            <Button onClick={ () => {setActive(!isActive)}  } ><Session /></Button>
            <SessionDropdown  displayVisibility={isActive ? "flex" : "none"}/>  
        </HeaderContainer>
    )
}

export default Header;