import styled from 'styled-components'
import ContentBlock from '../components/Core/ContentBlock'
import UnorderedList from '../components/Core/UnorderedList'
import ListItem from '../components/Core/ListItem'
import { Title, SubTitle, TextBlock, TextParagraph, TitleMedium, TitleMediumBackward, TitleShort, LinkPurple, } from '../components/Core/SingleStyledComponents'

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
        <TextParagraph>Java, JavaScript, PL/SQL, Python, HTML/CSS.</TextParagraph>

        <TitleShort>Tecnologias: </TitleShort>
        <TextParagraph> Spring Framework, ReactJS, NodeJS, JUnit/Mockito, Jest, PL/SQL (MySQL,
          MongoDB), XML, JSON, Microsservices, MVC, Rest/RestFull, Linux, SOLID, SOAP, GIT
          (Gitlab, Github)
        </TextParagraph>

        <TitleMediumBackward>Experiência</TitleMediumBackward>

        <TitleShort>Autônomo (01/2021 até Atual)</TitleShort>
        <TitleShort>Porto Alegre, Rio Grande do Sul, Brasil</TitleShort>
        <UnorderedList>
          <ListItem>Desenvolvi projetos pessoais e acadêmicos</ListItem>
          <ListItem>Ampliei meu conhecimento com cursos online sobre os frameworks atuais de desenvolvimento web</ListItem>
          <ListItem>Aprimorei meus conhecimentos em tópicos de computação avançada, como algoritmos complexos, computação distribuída e inteligência artificial</ListItem>
        </UnorderedList>

        <TitleShort>Monitor Universitário (08/2021 - 01/2021)</TitleShort>
        <TitleShort>PUCRS - Porto Alegre, Rio Grande do Sul, Brasil</TitleShort>
        <UnorderedList>
          <ListItem>-Responsável por atender dúvidas pontuais de alunos.</ListItem>
          <ListItem>-Orientar os estudos em tópicos avançados de orientação a objetos.</ListItem>
          <ListItem>Auxiliar alunos na execução de exercícios e tutoriais sugeridos em aula.</ListItem>
        </UnorderedList>

        <TitleMediumBackward>Formação</TitleMediumBackward>
        <TextParagraph>Ciência da Computação - Pontifícia Universidade Católica do Rio Grande do Sul - Porto
        Alegre, Rio Grande do Sul, Brazil - conclusão prevista em 07/2024
        </TextParagraph>

        <SubTitle>More information in: <LinkPurple to="https://www.linkedin.com/in/jos%C3%A9-eduardo-rodrigues-serpa-66b627198/">https://www.linkedin.com/in/jos%C3%A9-eduardo-rodrigues-serpa-66b627198/.</LinkPurple></SubTitle>

      </ContentBlock>
    </AuthorContainer>
  );
}

export default Author;
