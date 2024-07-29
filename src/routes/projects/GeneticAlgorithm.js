import styled from 'styled-components'
import ContentBlock from '../../components/Core/ContentBlock';
import { Code, SubTitle, TextParagraph, Title, TitleMediumBackward, TitleShort } from '../../components/Core/SingleStyledComponents';
import Container from '../../components/Core/Container'

function GeneticAlgorithm() {
  return (
    <Container>
     <ContentBlock>
      <Title>Algoritmo genético</Title>
      <SubTitle>Algoritmo genético desenvolvido em java para solucionar o problema do caixeiro viajante</SubTitle>
      <TitleMediumBackward>Descrição do problema</TitleMediumBackward>
      <TitleShort>Problema do Caixeiro Viajante</TitleShort>

      <TextParagraph>
      O Problema do Caixeiro Viajante (TSP - Traveling Salesman Problem) é um dos problemas mais clássicos e estudados na teoria da computação e otimização combinatória. Ele pode ser descrito da seguinte forma:
      </TextParagraph>

      <TextParagraph>
      Um vendedor (caixeiro viajante) precisa visitar um certo número de cidades, partindo de uma cidade inicial, visitando cada uma das outras cidades exatamente uma vez, e retornando à cidade de origem. O objetivo é encontrar a rota mais curta possível que permita ao caixeiro viajante visitar todas as cidades e retornar ao ponto de partida.
      </TextParagraph>

      <TextParagraph>
      Matematicamente, o problema pode ser representado por um grafo completo onde os vértices representam as cidades e as arestas representam os caminhos entre as cidades, com um custo (ou distância) associado a cada aresta. A solução ideal do problema é a permutação das cidades que resulta no menor custo total de viagem.
      </TextParagraph>

      <TextParagraph>
      O TSP é um problema NP-difícil, o que significa que não existe um algoritmo eficiente conhecido que possa resolver todos os casos do problema de forma rápida (em tempo polinomial). Devido à sua complexidade, várias abordagens heurísticas e metaheurísticas, como algoritmos genéticos, algoritmos de colônia de formigas e algoritmos de busca tabu, são frequentemente usadas para encontrar soluções aproximadas em tempo razoável.
      </TextParagraph>

      <TextParagraph>
      No contexto do meu desenvolvimento, implementei um algoritmo genético em Java para abordar o TSP. O algoritmo genético é uma técnica inspirada na evolução natural, que utiliza processos como seleção, cruzamento e mutação para evoluir uma população de soluções candidatas ao longo de várias gerações, na tentativa de encontrar uma solução cada vez melhor para o problema do caixeiro viajante.
      </TextParagraph>

      <TitleMediumBackward>Como executar o código</TitleMediumBackward>

      <TextParagraph>
      Você deve compilar os arquivos Java (Main, City, Route) com a linha de comando abaixo no diretório /src:
      </TextParagraph>
      
      <Code>javac *.java</Code>

      <TextParagraph>
      Depois, você pode executar o algoritmo de três maneiras diferentes:
      </TextParagraph>

      <ol>
        <li>Executar a partir do arquivo de entrada do zero:</li>
        <Code>{"java Main <caminho_do_arquivo>"}</Code>

        <li>Executar a partir do arquivo de entrada do zero:</li>
        <Code>{"java Main <caminho_do_arquivo> <caminho_do_arquivo_de_checkpoint>"}</Code>

        <li>Executar a partir do arquivo de entrada do zero:</li>
        <Code>{"java Main -h"}</Code>
      </ol>

      
     </ContentBlock>
    </Container>
  );
}

export default GeneticAlgorithm;