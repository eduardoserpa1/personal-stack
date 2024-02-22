import styled from 'styled-components'
import TitleRandomColored from './TitleRandomColored'

const LogoContainer = styled.div`
    background-color: white;
    
    width: 200px;
    height: 64px;


    display: flex;
    flex-align: center;
    justify-content: center;
    align-items: center;

    align-self: left;
    
    &:hover{
        background-color: #fefefe;
        cursor: pointer;
    }
`

function Logo(){
    return (
        <LogoContainer>
            <TitleRandomColored />
        </LogoContainer>
    )
}

export default Logo;