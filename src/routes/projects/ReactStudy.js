import styled from 'styled-components'
import ContentBlock from '../../components/Core/ContentBlock';
import { SubTitle, TextParagraph, Title } from '../../components/Core/SingleStyledComponents';
import Container from '../../components/Core/Container'
import Image from '../../components/Core/Image'
import rs1 from '../../visual/images/react-study-1.png'

function ReactStudy() {
  return (
    <Container>
     <ContentBlock>
     <Title>react-study</Title>
     <SubTitle>página web inteiramente feita em react</SubTitle>
      <TextParagraph>
        Página web de uma biblioteca desenvolvida inteiramente usando ReactJS com JavaScript. Possui uma barra de pesquisa com acesso a dados estáticos de um JSON.
      </TextParagraph>
      <Image src={rs1} alt="pagina web" width="60%"></Image>
     </ContentBlock>
    </Container>
  );
}

export default ReactStudy;