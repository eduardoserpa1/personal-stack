import { Link } from 'react-router-dom'
import styled from 'styled-components'


const MenuContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;

    display: flex;
    align-self: center;

    a{
        text-decoration: none;
    }
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

    color:black;
    

    &:hover{
        background-color: #eaeaea;
        cursor: pointer;
    }
`

function Menu(){

    const Options = ["Home","Author","Projects"]

    return(
        <MenuContainer>
            {
                Options.map( (item) => (<Link to={`/${item}`}><MenuItem >{item.toLowerCase()}</MenuItem></Link>))
            }
        </MenuContainer>
    )
}


export default Menu