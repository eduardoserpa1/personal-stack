import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LinkPurple } from '../SingleStyledComponents'
import book_icon from '../../../visual/icons/book2.svg'
import typeblank_icon from '../../../visual/icons/typeblank.svg'
import link_icon from '../../../visual/icons/link.svg'
import { useEffect, useState } from 'react'
import badges from '../../../data/badges.json'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;

    background-color: white;

    width: 600px;
    height: 300px;

    border: solid 1px #dfdfdf;
    border-radius: 4px;

    margin: 10px;
    box-shadow: 0px 0px 1px #d0ccd3; 

    &:hover{
        cursor:pointer;
        background-color: #eae8eb;
    }
`

const Header = styled.div` 
    display: flex;
    flex-direction: row;
    
    align-items: center;
    align-content: flex-start;

    width: 100%;
    height: 20%;

    border-bottom: solid 1px #dfdfdf;
    cursor: default;
`

const Icon = styled.img`
    margin-right: 10px;
    width: 24px;
    height: 24px;
    margin-left: 10px;
`

const Body = styled.div`
    width: 100%;
    height: 40%;
    text-align: justify;

    p{
        margin: 10px;
        font-size: 14px;
    }
`

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;

    width: 100%;
    height: 40%;

    font-size: 12px;
    border-top: solid 1px #dfdfdf;

    cursor: default;
`

const LinkNoStyle = styled(Link)`
    text-decoration: none;
    color: black;
    height: 100%;
    width: 100%;
`

const Title = styled.span`
    font-weight: bold;
    font-size: 20px;
`

const GitLink = styled.a`
    display: flex;
    margin-left: auto;
    margin-right: 10px;

    cursor: pointer;
`

const Badge = styled.img`
    margin: 10px;
    height : 25px;

    object-fit:contain;
`

function Card(props){
    const [tecnologies, setTecnolgies] = useState([])
 
    function fetchTecnologies(){
        if(props.tecnologies == undefined || props.tecnologies == "")
            return

        const tecnologiesFormat = props.tecnologies.split(',');

        let tecnologiesURLs = []

        tecnologiesFormat.forEach( name => {
            badges.data.forEach( badge => {
                if(name.toLowerCase() === badge.name.toLowerCase())
                    tecnologiesURLs.push(badge.url)
            })  
        })


        setTecnolgies(tecnologiesURLs)
    }

    useEffect( () => {
        fetchTecnologies()
    }, [])


    return(
        <Container>
            
            <Header>
                <Icon src={book_icon}  alt='book_icon' />
                <Title>{props.title}</Title>
                {
                    props.link !== "" ? 
                    <GitLink href={props.link} target='_blank'>
                    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"  alt='git link'/>
                    </GitLink>
                    : ""
                }
            </Header>
            <LinkNoStyle to={"/personal-stack/Projects/" + props.routename}>
                <Body>
                    <p>{props.desc}</p>
                </Body>
            </LinkNoStyle>

            <Footer>
                {
                    tecnologies.length !== 0 
                    ? 
                    tecnologies.map( (url) => (<Badge src={url}/>))
                    :
                    "tecnologias não especificadas."
                }
            </Footer>
            
        </Container>
    )
}

export default Card