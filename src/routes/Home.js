import styled from 'styled-components';

import Container from '../components/Core/Container'
import ContentBlock from '../components/Core/ContentBlock';
import CodeBlock from '../components/Core/CodeBlock';
import { Title, TextParagraph, TextBlock, SubTitle, LinkPurple, } from '../components/Core/SingleStyledComponents';
import UnorderedList from '../components/Core/UnorderedList';
import ListItem from '../components/Core/ListItem';

import wl from '../StaticData/weblinks.json';

const WebLinks = new Map();

wl.map(obj => WebLinks.set(obj.name, obj.link));

const HomeContainer = styled(Container)`
  height: 100vh;
`

function Home() {
  return (
    <HomeContainer>
      <ContentBlock>
        <Title>personal-stack project</Title>
        <SubTitle>portifólio pessoal</SubTitle>
        <TextParagraph>
        O projeto <b>personal-stack</b> é uma aplicação web destinada a exibir projetos pessoais e qualificações. 
        A aplicação é desenvolvida inteiramente utilizando <LinkPurple to={WebLinks.get('javascript')}>JavaScript</LinkPurple> com <LinkPurple to={WebLinks.get('react')}>ReactJS</LinkPurple>.
        </TextParagraph>
        <TextParagraph>Para acessar o currículo e informações profissionais basta clicar em '<LinkPurple to='/personal-stack/Author'>author</LinkPurple>' nas opções do menu. A sessão '<LinkPurple to='/personal-stack/Projects'>projects</LinkPurple>' exibe diferentes projetos em que atuei.</TextParagraph>

      </ContentBlock>
    </HomeContainer>
  );
}

export default Home
