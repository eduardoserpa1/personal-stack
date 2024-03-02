import styled from "styled-components"
import { Link } from "react-router-dom"

const Title = styled.h1`

`

const TextParagraph = styled.p`
    width: 90%; 
`

const SubTitle = styled.span`
    width: 90%; 
    text-align:center;
`

const LinkPurple = styled(Link)`
    color: Indigo;
    text-decoration: none;

    &:hover{
        font-weight: bold;
    }
`

const TextBlock = styled.p`
    width: 90%;

    border: solid 1px #cecece;
    border-radius: 8px;

    padding: 10px;

    background-color: #f2f2f2;

    display: flex;
    box-shadow: 0px 0px 10px #cfcfcf
`


export {
        Title,
        TextParagraph,
        TextBlock,
        SubTitle,
        LinkPurple
}
