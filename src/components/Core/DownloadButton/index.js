import styled from 'styled-components'
import image from '../../../visual/icons/download.svg'


const Button = styled.a`
    background-color: #e9e9e9;
    display: flex;
    align-items: center;

    text-decoration: none;
    color: black;

    padding: 5px 10px 5px 10px;
    border: solid 1px #acacac;
    border-radius: 5px;

    

    width: 200px;

    &:hover{
        background-color: #dfdfdf;
    }
`

const Text = styled.span`
    padding-left: 10px;
`

function DownloadButton(props){
    return(
        <Button href={props.path ? props.path : "#404"} download='jose-serpa-curriculo.pdf'>
            <img src={image} alt="ícone de download do botão" width='30px'/>
            <Text>{props.text ? props.text : null}</Text>
        </Button>
    )
}

export default DownloadButton