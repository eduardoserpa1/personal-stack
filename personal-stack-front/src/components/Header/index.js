import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'

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
        </HeaderContainer>
    )
}

export default Header;