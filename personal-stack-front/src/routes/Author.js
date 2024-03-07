import styled from 'styled-components'
import ContentBlock from '../components/Core/ContentBlock'
import { Title, SubTitle, TextBlock, TextParagraph, TitleMedium, TitleMediumBackward, TitleShort, } from '../components/Core/SingleStyledComponents'

const AuthorContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display:flex;
    justify-content: center;
    align-itens: center; 
`


function Author() {
  return (
    <AuthorContainer>
      <ContentBlock>
        <Title>José Eduardo Rodrigues Serpa</Title>
        <SubTitle>desenvolvedor de software</SubTitle>
        <TitleMediumBackward>Sobre</TitleMediumBackward>
        <TextParagraph>Desenvolvedor de software full-stack, com foco em backend.</TextParagraph>
        <TextParagraph>Planejamento e criação de arquiteturas para aplicações web.</TextParagraph>
        <TextParagraph>Inglês (Good communication, speaking and writing)</TextParagraph>

        <TitleMediumBackward>Stacks</TitleMediumBackward>
        <TitleShort>Linguagens: </TitleShort>
        <TitleShort>Tecnologias: </TitleShort>


      </ContentBlock>
    </AuthorContainer>
  );
}

export default Author;
