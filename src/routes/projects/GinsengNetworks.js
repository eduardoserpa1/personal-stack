import styled from 'styled-components'
import ContentBlock from '../../components/Core/ContentBlock';
import { FlexImageBlock, SubTitle, TextParagraph, Title } from '../../components/Core/SingleStyledComponents';
import Container from '../../components/Core/Container'
import Image from '../../components/Core/Image';
import gn1 from '../../visual/images/ginseng-networks-1.png'
import gn2 from '../../visual/images/ginseng-networks-2.png'
import gn3 from '../../visual/images/ginseng-networks-3.png'
import gn4 from '../../visual/images/ginseng-networks-4.png'
import gn5 from '../../visual/images/ginseng-networks-5.png'
import gn6 from '../../visual/images/ginseng-networks-6.png'


function GinsengNetworks() {
  return (
    <Container>
     <ContentBlock>
      <Title>Landing page - Provaedor de Internet</Title>
      <SubTitle>Landing page para empresa provedora de serviços de internet</SubTitle>
      
      <TextParagraph>Landing page desenvolvida em HTML e CSS, com design responsivo e sistema de envio de email simples para uma empresa provedora de internet.</TextParagraph>
      <br/>
      <br/>
      <Image src={gn1} alt='' width='70%' maximizedWidth='80%' />
      <br/>
      <Image src={gn2} alt='' width='70%' maximizedWidth='80%' />
      <br/>
      <Image src={gn3} alt='' width='70%' maximizedWidth='80%' />
      <br/>
      <FlexImageBlock>
        <Image src={gn4} alt='' width='30%' maximizedWidth='20%' />
        <br/>
        <Image src={gn5} alt='' width='30%' maximizedWidth='20%' />
        <br/>
        <Image src={gn6} alt='' width='30%' maximizedWidth='20%' />
      </FlexImageBlock>
      <br/>
      <br/>
      
     </ContentBlock>
    </Container>
  );
}

export default GinsengNetworks;