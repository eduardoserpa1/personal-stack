import styled from "styled-components"
import { Link } from "react-router-dom"

const Title = styled.h1`
    margin-bottom: 0;
    
`

const TitleMedium = styled.h2`
    margin-bottom: 0;
    width: 90%;
`

const TitleMediumBackward = styled.h2`
    margin-bottom: 0;
    width: 92%;
`

const TitleShort = styled.h4`
    margin-bottom: 0;
    width: 90%;
`

const TextParagraph = styled.p`
    width: 90%; 
    margin-bottom: 0;
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

const Code = styled.div`
    background-color: #e7e7e7;
    padding: 10px 20px 10px 20px;
    margin: 10px 20px 10px 20px;
    text-justify: justify; 

    p{
        margin-top: 0px;
        margin-bottom: 0px;
    }
`

const FlexImageBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
    height: 500px;
`

export {
        Title,
        TitleMedium,
        TitleMediumBackward,
        TitleShort,
        TextParagraph,
        TextBlock,
        SubTitle,
        LinkPurple,
        Code,
        FlexImageBlock
}
