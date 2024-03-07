import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {MenuItem} from '../MenuItem'

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