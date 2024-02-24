import styled from 'styled-components'

import ContentBlock from '../components/ContentBlock'
import TextBlock from '../components/TextBlock'
import { H1, P, LinkBlack, LinkPurple } from '../components/UtilsHTML'

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
        <h1>personal-stack project</h1>
        <span>portifólio pessoal dinâmico</span>
        <P>O projeto <b>personal-stack</b> é uma aplicação web destinada a exibir projetos pessoais e qualificações.</P>
        <P>Desenvolvida, documentada e mantida por <LinkPurple to={"../Author"}>José</LinkPurple>, essa plataforma de projetos oferece uma impressão mais prática
        sobre as qualificações profissionais.</P>
      </ContentBlock>
    </HomeContainer>
  );
}

export default Home;
