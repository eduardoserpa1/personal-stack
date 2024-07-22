import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import MenuItem from '../MenuItem'

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

    const Options = ["Author","Projects"]
    
    const location = useLocation()

    let currentPageVector = location.pathname.split("/");

    let currentPage = ""

    currentPage = currentPageVector[2]

    if(currentPageVector.length === 2){
        currentPage = "Projects"
    }
      
    return(
        <MenuContainer>
            {
                Options.map( (item) => (<Link to={`personal-stack/${item}`}><MenuItem isSelected={((currentPage !== "" && currentPage !== undefined) && currentPage === item) ? true : false} >{item.toLowerCase()}</MenuItem></Link>))
            }
        </MenuContainer>
    )
}


export default Menu