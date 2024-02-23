import styled from "styled-components"
import TextBlock from "../TextBlock";

const ContentBlockContainer = styled.div`
    width: 80vw;
    height: 80vw;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;


    background-color: #fafafa;

`

function ContentBlock(){
    return(
        <ContentBlockContainer>
            <TextBlock>Essa é uma demonstração de como o componente TextBlock se comporta em um container ContentBlock.</TextBlock>
            <TextBlock>Podemos escrever todos os tipos de textos aqui que eles irão se ajustar conforme o container de conteúdo que fornecemos.</TextBlock>
        </ContentBlockContainer>
    )
}

export default ContentBlock;