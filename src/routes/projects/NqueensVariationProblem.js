import styled from 'styled-components'
import ContentBlock from '../../components/Core/ContentBlock';
import { Code, SubTitle, TextParagraph, Title, TitleMediumBackward, TitleShort } from '../../components/Core/SingleStyledComponents';
import Container from '../../components/Core/Container'

function NqueensVariationProblem() {
  return (
    <Container>
     <ContentBlock>
      <Title>Problema das N-rainhas - Backtracking</Title>
      <SubTitle>Solução para o problema das N-rainhas utilizando backtracking</SubTitle>
      <TitleMediumBackward>Descrição do problema</TitleMediumBackward>
      <TitleShort>Problema das N-rainhas</TitleShort>

      <TextParagraph>
      O Problema das N-Rainhas é um problema clássico de combinação e teoria dos jogos que tem origem no xadrez. Ele pode ser descrito da seguinte forma:
      </TextParagraph>
      <TextParagraph>
      Dado um tabuleiro de xadrez de dimensões NxN, o objetivo é posicionar N rainhas no tabuleiro de tal forma que nenhuma rainha ataque outra. No xadrez, uma rainha pode se mover qualquer número de casas na horizontal, vertical ou diagonal. Portanto, para resolver o problema, nenhuma rainha deve compartilhar a mesma linha, coluna ou diagonal com outra rainha.
      </TextParagraph>
      <TextParagraph>
      Matematicamente, o problema pode ser representado por uma matriz NxN, onde cada posição na matriz pode conter uma rainha ou estar vazia. A solução ideal é uma configuração onde todas as N rainhas estão posicionadas no tabuleiro sem conflitos.
      </TextParagraph>
      <TextParagraph>
      O problema das N-Rainhas é um problema NP-completo, o que significa que a complexidade do problema cresce rapidamente com o aumento de N. Devido a essa complexidade, várias abordagens algorítmicas são utilizadas para encontrar soluções, como backtracking, algoritmos genéticos, busca tabu e outras heurísticas.
      </TextParagraph>
      <TextParagraph>
      No contexto do meu desenvolvimento, implementei um algoritmo para resolver o problema das N-Rainhas, que utiliza uma abordagem específica para explorar o espaço de soluções e encontrar uma configuração válida onde todas as rainhas estão posicionadas de forma segura no tabuleiro.
      </TextParagraph>

      <TitleMediumBackward>Adaptação para esse problema em específico</TitleMediumBackward>

      <TitleShort>Os Três Porquinhos e Seus Amigos</TitleShort>

      <TextParagraph>
      É sábado e os três porquinhos resolveram receber alguns amigos (no caso, cinco galinhas) para uma tarde de comilança e descontração. Eles tinham terminado de almoçar quando uma das galinhas sugeriu uma brincadeira ao ver o piso de lajotas pretas e brancas:
      </TextParagraph>
      <ul>

        <li>O plano é colocar os porquinhos e as galinhas, um em cada lajota do piso;</li>
        <li>O piso é quadrado e tem n × n lajotas;</li>
        <li>Todos os porquinhos e galinhas devem fazer parte do jogo;</li>
        <li>Um bicho só poderá ver os bichos que estão na mesma linha, coluna ou diagonais;</li>
        <li>Um bicho só deve ver bichos da mesma espécie que ele.</li>
      
      </ul>
      
      <TextParagraph>
      Você deve escrever um algoritmo baseado em backtracking que leia a configuração do jogo via linha de comando (como os casos que estão ao lado) e escreva como saída um inteiro para cada caso, informando quantas maneiras possíveis existem de posicionar os bichinhos. A entrada tem o seguinte formato:
      </TextParagraph>

      <ul>
        <li>O número n de lajotas dando as dimensões do piso;</li>
        <li>O número p de porquinhos;</li>
        <li>O número g de galinhas;</li>
      </ul>

      <TitleMediumBackward>Como executar o código</TitleMediumBackward>

      <TextParagraph>
      A execução deste algoritmo é feita basicamente de duas maneiras, você deve compilar o arquivo Java com
      </TextParagraph>

      <Code>javac bt.java</Code>

      <TextParagraph>
      Depois, faça
      </TextParagraph>

      <ol>
        <li>Executar testes predefinidos:</li>
        <Code>{"java bt test"}</Code>

        <li>Executar uma entrada específica:</li>
        <Code>{"java bt <num_tile> <num_pigs> <num_chickens>"}</Code>
      </ol>

     </ContentBlock>
    </Container>
  );
}

export default NqueensVariationProblem;