import styled from 'styled-components'
import ContentBlock from '../../components/Core/ContentBlock';
import { SubTitle, TextParagraph, Title, TitleMediumBackward, TitleShort } from '../../components/Core/SingleStyledComponents';
import Container from '../../components/Core/Container'
import am1 from '../../visual/images/automarket-1.png'
import am2 from '../../visual/images/automarket-2.png'
import am3 from '../../visual/images/automarket-3.png'
import am4 from '../../visual/images/automarket-4.png'
import am5 from '../../visual/images/automarket-5.png'
import am6 from '../../visual/images/automarket-6.png'
import am7 from '../../visual/images/automarket-7.png'
import Image from '../../components/Core/Image';



function Automarket() {
  return (
    <Container>
     <ContentBlock>
      <Title>E-commerce - Supermercado</Title>
      <SubTitle>ecommerce construiído em php para supermercado local</SubTitle>
      
      <TextParagraph>Ecommerce produzido utilizando Php, JavaScript, HTML, CSS e MySQL.</TextParagraph>
      <TitleMediumBackward>Página inicial</TitleMediumBackward>
      <Image src={am1} alt='' width='60%' maximizedWidth='60%' />

      <TitleMediumBackward>Funcionalidades</TitleMediumBackward>
      <TitleShort>Cadastro e autenticação de usuários</TitleShort>
      <br/>
      <Image src={am2} alt='' width='60%' maximizedWidth='60%' />
      <br/>
      <Image src={am3} alt='' width='60%' maximizedWidth='60%' />

      <TitleShort>Visualização e manipulação das informações da conta</TitleShort>
      <br/>
      <Image src={am4} alt='' width='60%' maximizedWidth='60%' />
      <br/>
      <Image src={am5} alt='' width='60%' maximizedWidth='60%' />
      
      <TitleShort>Catálogo e compra de produtos</TitleShort>
      <br/>
      <Image src={am6} alt='' width='60%' maximizedWidth='60%' />
      
      <TitleShort>Carrinho de compras e confirmação de pagamento</TitleShort>
      <br/>
      <Image src={am7} alt='' width='60%' maximizedWidth='60%' />
      
      
     </ContentBlock>
    </Container>
  );
}

export default Automarket;