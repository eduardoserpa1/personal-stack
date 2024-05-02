import styled from 'styled-components'
import ContentBlock from '../../components/Core/ContentBlock';
import { SubTitle, TextParagraph, Title, TitleMedium, TitleShort } from '../../components/Core/SingleStyledComponents';
import Container from '../../components/Core/Container'

function NodeStudy() {
  return (
    <Container>
     <ContentBlock>
     <Title>node-study</Title>
     <SubTitle>RestAPI feita em Node para uma base dados de livros</SubTitle>
      <TextParagraph>
        Desenvolvida com Node, utilizando express e axios, essa API oferece um CRUD (create, read, update, delete) para uma base de dados de livros.
      </TextParagraph>
      <TitleMedium>endpoints</TitleMedium>
      <TitleShort>get: livros/</TitleShort>
      <TextParagraph>retorna todas os registros disponíveis de livros.</TextParagraph>
      <TitleShort>get: livros/:id</TitleShort>
      <TextParagraph>retorna apenas o livro com id igual ao informado.</TextParagraph>
      <TitleShort>post: livros/</TitleShort>
      <TextParagraph>cria um novo livro.</TextParagraph>
      <TitleShort>patch: livros/:id</TitleShort>
      <TextParagraph>atualiza os dados de um livro existente.</TextParagraph>
      <TitleShort>delete: livros/:id</TitleShort>
      <TextParagraph>exlcui o registro do livro com id igual ao id informado.</TextParagraph>
     </ContentBlock>
    </Container>
  );
}

export default NodeStudy;