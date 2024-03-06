import styled from 'styled-components'

import ContentBlock from '../components/Core/ContentBlock'
import CodeBlock from '../components/Core/CodeBlock'

import { Title, TextParagraph, TextBlock, SubTitle, LinkPurple, } from '../components/Core/SingleStyledComponents'
import UnorderedList from '../components/Core/UnorderedList'
import ListItem from '../components/Core/ListItem'

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
        <TextParagraph>A aplicação personal-stack utiliza duas linguagens principais, sendo elas: </TextParagraph>
        <UnorderedList>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        </UnorderedList>
      </ContentBlock>
    </HomeContainer>
  );
}

export default Home
