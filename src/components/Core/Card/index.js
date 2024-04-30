import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LinkPurple } from '../SingleStyledComponents'
import book_icon from '../../../visual/icons/book2.svg'
import typeblank_icon from '../../../visual/icons/typeblank.svg'
import link_icon from '../../../visual/icons/link.svg'



const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;

    background-color: white;

    width: 450px;
    height: 200px;;

    border: solid 1px #dfdfdf;
    border-radius: 4px;

    margin: 10px;
    box-shadow: 0px 0px 1px #d0ccd3; 

    &:hover{
        cursor:pointer;
        background-color: #eae8eb;
    }
`

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    
    align-items: center;
    align-content: flex-start;

    width: 90%;
    height: 20%;

    border-bottom: solid 1px #dfdfdf;
    

    img{
        margin-right: 10px;
        width: 24px;
        height: 24px;
        margin-left: -10px;
    }
`

const CardBody = styled.div`
    width: 100%;
    height: 60%;
    text-align: justify;

    p{
        margin: 10px;
        font-size: 14px;
    }
`

const CardFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    width: 90%;
    height: 20%;

    font-size: 12px;

    border-top: solid 1px #dfdfdf;

    cursor: default;

    img{
        width: 24px;
        height: 24px;
        color: black;
        margin-left:10px;
        margin-right:10px;
    }
    img:nth-child(1){
        margin-left: -10px; 
    }
    img:nth-child(3){
        margin-right: -10px; 
        cursor: pointer;
        padding: 2px;
    }

    img:nth-child(3):hover{ 
        background-color: #dddddd;
    }
`

const Title = styled.span`
    font-weight: bold;
    font-size: 20px;
`

function Card(props){
    return(
        <CardContainer>
            <Link to={"/personal-stack/Projects/" + props.routename}>
                <CardHeader>
                    <img src={book_icon}  alt='book_icon' />
                    <Title>{props.title}</Title>
                </CardHeader>
                <CardBody>
                    <p>{props.desc}</p>
                </CardBody>
                <CardFooter>
                    <img src={link_icon} alt='link_icon' />
                    <LinkPurple to={props.link}>{props.link}</LinkPurple>
                    <img src={typeblank_icon} alt='open_page_in_another_tab_icon' />
                </CardFooter>
            </Link>
        </CardContainer>
    )
}

export default Card