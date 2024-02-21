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
    
    &:hover{
        background-color: #f8f8f8;
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