import styled from "styled-components"
import { Link } from "react-router-dom"

const H1 = styled.h1`

`

const P = styled.p`
    width: 90%; 
   
`

const LinkBlack = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover{
        font-weight: bold;
    }
`

const LinkPurple = styled(Link)`
    color: Indigo;
    text-decoration: none;

    &:hover{
        font-weight: bold;
    }
`


export {
        H1,
        P,
        LinkBlack,
        LinkPurple,
}
