import styled from 'styled-components'
import ContentBlock from '../../components/Core/ContentBlock';
import Image from '../../components/Core/Image';
import { SubTitle, TextParagraph, Title, TitleMediumBackward, TitleShort, FlexImageBlock } from '../../components/Core/SingleStyledComponents';
import Container from '../../components/Core/Container'
import bmt1 from '../../visual/images/bet-manager-test1.png'
import bmt2 from '../../visual/images/bet-manager-test2.png'
import bm1 from '../../visual/images/bet-manager-1.png'
import bm2 from '../../visual/images/bet-manager-2.png'
import bm3 from '../../visual/images/bet-manager-3.png'
import bm4 from '../../visual/images/bet-manager-4.png'
import bm5 from '../../visual/images/bet-manager-5.png'
import bm6 from '../../visual/images/bet-manager-6.png'
import bm7 from '../../visual/images/bet-manager-7.png'
import bm8 from '../../visual/images/bet-manager-8.png'
import bm9 from '../../visual/images/bet-manager-9.png'
import bm10 from '../../visual/images/bet-manager-10.png'
import bm11 from '../../visual/images/bet-manager-11.png'
import bm12 from '../../visual/images/bet-manager-12.png'
import bm13 from '../../visual/images/bet-manager-13.png'
import bm14 from '../../visual/images/bet-manager-14.png'
import bm15 from '../../visual/images/bet-manager-15.png'
import bm16 from '../../visual/images/bet-manager-16.png'
import bm17 from '../../visual/images/bet-manager-17.png'
import bm18 from '../../visual/images/bet-manager-18.png'
import bm19 from '../../visual/images/bet-manager-19.png'
import bm20 from '../../visual/images/bet-manager-20.png'
import bm21 from '../../visual/images/bet-manager-21.png'
import bm22 from '../../visual/images/bet-manager-22.png'


function BetManager() {
  return (
    <Container>
      <ContentBlock>
        <Title>bet-manager</Title>
        <SubTitle>Sistema web para gerenciar apostas em sorteios</SubTitle>
        <TitleMediumBackward>Back-end</TitleMediumBackward>
        <TextParagraph>
          RestAPI desenvolvida com Spring utilizando a arquitetura semelhante a de micro-serviços, utilizando JPA e Postgres, de forma bem simples e com poucos end-points. Testes unitários com JUnit.
        </TextParagraph>
        <TitleMediumBackward>Front-end</TitleMediumBackward>
        <TextParagraph>
          React.js utilizando styled components para utilizar apenas JavaScript.
        </TextParagraph>
        <TitleMediumBackward>Implementação</TitleMediumBackward>
        <TextParagraph>
          Página web simples, com um bom fluxo de telas. No front-end foram definidas 6 rotas principais, representando as telas do usuário.
          É possível instanciar diversos sorteios com números aleatórios, como também, registrar diversas apostas para cada sorteio. Toda e qualquer opção que não deva ser acessada pelo usuário não encontra-se disponível para o mesmo, evitando assim, erros de navegação.
        </TextParagraph>
        <TextParagraph>
          Já na parte do Back-end, foi desenvolvida uma API REST utilizando Spring, com basicamente 3 entidades no banco de dados relacional, sendo elas: User, Sortition e Bet.
          Implementei em uma arquitetura semelhante a micro-serviços, as regras de negócio especificadas. Também foram elaborados testes unitários por parte do back-end, utilizando JUnit;
        </TextParagraph>
        <TitleMediumBackward>Testes da API</TitleMediumBackward>
        <TextParagraph>
          Captura de tela mostrando a cobertura de código e o console após executar os testes unitários com JUNIT.
        </TextParagraph>
        foto teste 1 e 2
        <FlexImageBlock height="300px">
          <Image src={bmt1} alt='' width={'30%'} />
          <Image src={bmt2} alt='' width={'30%'} />
        </FlexImageBlock>
        <TitleMediumBackward>Funcionalidades</TitleMediumBackward>
        <TitleShort>Iniciar</TitleShort>
        <TextParagraph>Tela inicial, apenas para redirecionar para o app de forma correta.</TextParagraph>
        <Image src={bm1} alt='' width={'70%'} />

        <TextParagraph>Ao iniciar, é possível observar todos os sorteios criados em formato de lista, para acessar um sorteio basta clicar.</TextParagraph>
        <Image src={bm2} alt='' width={'70%'} />
        <TextParagraph>Para criar um novo sorteio, um botão abaixo da lista cria um sorteio novo.</TextParagraph>
        <Image src={bm3} alt='' width={'70%'} />
        <TextParagraph>Tela após criação de um novo sorteio (sorteios que ainda não foram apurados possuem ABERTO escrito, sendo impossível acessar o seu resultado, enquanto os sorteios marcados como FINALIZADO, podem ser acessados livremente junto a seus relatórios).</TextParagraph>
        <Image src={bm4} alt='' width={'70%'} />

        <TitleShort>Registrar nova aposta</TitleShort>
        <TextParagraph>Ao clicar em um sorteio, uma lista de apostas atreladas ao mesmo é exibida, nesse caso (exemplo abaixo), ainda sem nenhuma aposta registrada.</TextParagraph>
        <Image src={bm5} alt='' width={'70%'} />
        <TextParagraph>Quando não existem apostas registradas, a único caminho possível além de voltar é criar ao menos 1 aposta para que possa ser feita a apuração.</TextParagraph>
        <Image src={bm6} alt='' width={'70%'} />
        <TextParagraph>O formulário de criação de apostas possui diversos filtros de dados inválidos, tais como os exibidos abaixo capturas de tela durante testes manuais.</TextParagraph>
        <FlexImageBlock height="200px" width={'60%'}>
          <Image src={bm7} alt='' width={'45%'} />
          <Image src={bm8} alt='' width={'45%'} />
        </FlexImageBlock>
        <FlexImageBlock height="200px" width={'60%'}>
          <Image src={bm9} alt='' width={'45%'} />
          <Image src={bm10} alt='' width={'45%'} />
        </FlexImageBlock>
        <Image src={bm11} alt='' width={'30%'} />
        <TextParagraph>Também são exibidas mensagens de controle para criação de aposta aleatória (Surpresinha) e predefinida.</TextParagraph>
        <FlexImageBlock height="200px" width={'60%'}>
          <Image src={bm12} alt='' width={'45%'} />
          <Image src={bm13} alt='' width={'45%'} />
        </FlexImageBlock>

        <TitleShort>Listar apostas</TitleShort>
        <TextParagraph>Após registrar apostas, podemos verificar a lista das mesmas na mesma tela acima.</TextParagraph>
        <Image src={bm14} alt='' width={'70%'} />

        <TitleShort>Finalizar apostas e executar o sorteio</TitleShort>
        <TextParagraph>Após realizar o registro de pelo menos uma aposta, o sistema libera o caminho para a apuração das apostas no sorteio selecionado. Clicando em ‘Apuração’, a página será redirecionada para a tela de finalização, onde a única opção é de finalizar o sorteio e apurar as apostas.</TextParagraph>
        <Image src={bm15} alt='' width={'70%'} />
        <TextParagraph>Mensagem exibida após apurar as apostas.</TextParagraph>
        <Image src={bm16} alt='' width={'30%'} />
        <TextParagraph>Os resultados só ficam disponíveis após a apuração, assim como também, só é executar uma ação de cada vez para cada sorteio, não podendo realizar apostas em sorteios abertos ou então ver os resultados dos mesmos.</TextParagraph>
        <Image src={bm17} alt='' width={'70%'} />

        <TitleShort>Fim da apuração</TitleShort>
        <TextParagraph>A tela de resultados por ser muito grande teve de ser recortada em 2 capturas de tela (durante os testes e capturas de tela utilizei sorteios diferentes para exemplificar quando há ganhadores e quando não). Abaixo podemos ver em ordem os requisitos desta funcionalidade, como também, um exemplo de um sorteio que houve ganhadores na primeira rodada.</TextParagraph>
        <Image src={bm18} alt='' width={'70%'} />
        <Image src={bm19} alt='' width={'70%'} />
        <TextParagraph>Abaixo um exemplo de como seria o resultado de um sorteio sem ganhadores, após realizar a inserção de 25 números extras, porém mesmo assim sem nenhum vencedor.</TextParagraph>
        <Image src={bm20} alt='' width={'30%'} />

        <TitleShort>Premiação</TitleShort>
        <TextParagraph>A premiação de cada aposta vencedora foi implementada da forma mais simples possível, atribuindo apenas um índice aleatório em uma lista de prêmios (muito úteis) predefinidos, como segue alguns exemplos abaixo.</TextParagraph>
        <FlexImageBlock height="200px" width={'60%'}>
          <Image src={bm21} alt='' width={'49%'} />
          <Image src={bm22} alt='' width={'49%'} />
        </FlexImageBlock>
        <br/>
        <br/>
        <br/>
        <br/>
      </ContentBlock>
    </Container>
  );
}

export default BetManager;