import styled from 'styled-components'
import ContentBlock from '../../components/Core/ContentBlock';
import { SubTitle, TextParagraph, Title, TitleMediumBackward, TitleShort } from '../../components/Core/SingleStyledComponents';
import Container from '../../components/Core/Container'
import Image from '../../components/Core/Image'
import rns1 from '../../visual/images/react-node-study-1.png'
import rns2 from '../../visual/images/react-node-study-2.png'
import rns3 from '../../visual/images/react-node-study-3.png'
import rns4 from '../../visual/images/react-node-study-4.png'
import rns5 from '../../visual/images/react-node-study-5.png'

function ReactNodeStudy() {
  return (
    <Container>
      <ContentBlock>
        <Title>react-node-study</Title>
        <SubTitle>integração de backend e frontend para compor uma aplicação web de biblioteca</SubTitle>
        <TextParagraph>
          Aplicação web desenvolvida utilizando ReactJS para o frontend e Node para o backend com RestAPI. Nela é possivel pesquisr livros, adicionar aos favoritos e acessar a barra de favoritos.
        </TextParagraph>

        <TitleMediumBackward>Funcionalidades</TitleMediumBackward>
        <TitleShort>Pesquisar livros</TitleShort>
        <TextParagraph>Após digitar alguma frase na barra de pesquisa, será exibido os resultados.</TextParagraph>
        <Image src={rns1} width="70%" />
        <TitleShort>Adicionar aos favoritos</TitleShort>
        <TextParagraph>Exemplo da página de favoritos antes de adicionar um novo livro.</TextParagraph>
        <Image src={rns2} width="70%" />
        <br /><br /><br />
        <TextParagraph>Para selecionar um favorito, basta clicar em algum livro que aparecer na pesquisa.</TextParagraph>
        <Image src={rns3} width="70%" />
        <br /><br /><br />
        <TextParagraph>Uma mensagem irá aparecer confirmando que foi adicionado.</TextParagraph>
        <Image src={rns4} width="40%" />
        <TitleShort>Acessar barra de favoritos</TitleShort>
        <TextParagraph>Por fim, nessa página é exibida a lista de livros favoritos agora com o novo livro. Caso queira excluir um livro dos favoritos, basta clicar que o mesmo é removido.</TextParagraph>
        <Image src={rns5} width="70%" />
      </ContentBlock>
    </Container>
  );
}

export default ReactNodeStudy;