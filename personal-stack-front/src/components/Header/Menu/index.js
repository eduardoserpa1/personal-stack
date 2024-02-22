import styled from 'styled-components'


const MenuContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;

    display: flex;
    align-self: center;
`

const MenuItem = styled.span`
    width: 120px;
    height: 100%;
    border-left: solid 1px #f1f1f1;
    border-right: solid 1px #f1f1f1;
    
    display: flex;
    justify-content: center;
    align-items: center;

    text-shadow: 1px 1px #e1e1e1;

    &:hover{
        background-color: #eaeaea;
        cursor: pointer;
    }
`

function Menu(){

    const Options = ["home","whoami","projects"]

    return(
        <MenuContainer>
            {
                Options.map( (item) => (<MenuItem>{item}</MenuItem>))
            }
        </MenuContainer>
    )
}


export default Menu