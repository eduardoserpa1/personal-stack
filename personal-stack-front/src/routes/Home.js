import styled from 'styled-components'

import ContentBlock from '../components/Core/ContentBlock'

import { Title, TextParagraph, TextBlock, SubTitle, LinkPurple, } from '../components/Core/SingleStyledComponents'

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;

    display:flex;
    justify-content: center;
    align-itens: center; 
`


function Home() {
  return (
    <HomeContainer>
      <ContentBlock>
        <Title>personal-stack project</Title>
        <SubTitle>portifólio pessoal dinâmico</SubTitle>
        <TextParagraph>O projeto <b>personal-stack</b> é uma aplicação web destinada a exibir projetos pessoais e qualificações.</TextParagraph>
        <TextParagraph>Desenvolvida, documentada e mantida por <LinkPurple to={"../Author"}>José</LinkPurple>, essa plataforma de projetos oferece uma impressão mais prática
        sobre as qualificações profissionais.</TextParagraph>
        <TextBlock>exemplo de textblock</TextBlock>
      </ContentBlock>
    </HomeContainer>
  );
}

export default Home;
