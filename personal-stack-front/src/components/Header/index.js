import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'
import Session from './Session'
import SessionDropdown from './SessionDropdown'

const HeaderContainer = styled.div`
    width: 100vw;
    height: 64px;
    border-bottom: solid 1px #f1f1f1;

    display: flex
`


function Header(){
    return (
        <HeaderContainer>
            <Logo />
            <Menu />
            <Session />
            <SessionDropdown />
        </HeaderContainer>
    )
}

export default Header;