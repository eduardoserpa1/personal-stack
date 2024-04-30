import styled from 'styled-components'

import Container from '../../components/Core/Container'
import ContentBlock from '../../components/Core/ContentBlock'
import {SubTitle, TextParagraph, Title, TitleMediumBackward, Code, FlexImageBlock} from '../../components/Core/SingleStyledComponents'
import Image from '../../components/Image'
import traveller_genetic_parallel_diagram from '../../visual/images/traveller-genetic-parallel-diagram.png'
import traveller_genetic_parallel_run1 from '../../visual/images/traveller-genetic-parallel-run1.png'
import traveller_genetic_parallel_run2 from '../../visual/images/traveller-genetic-parallel-run2.png'

function TravellerGeneticParallel(){
    return(
        <Container>
            <ContentBlock>
                <Title>traveller-genetic-parallel</Title>
                <SubTitle>Paralelização do Algoritmo Genético para resolução do Problema do Caixeiro-Viajante</SubTitle>

                <TitleMediumBackward>Introdução</TitleMediumBackward>
                <TextParagraph>
                    O Problema do Caixeiro Viajante é um problema clássico de otimização combinatória que busca determinar a rota mais curta que um caixeiro viajante pode percorrer ao visitar um conjunto de cidades uma única vez e retornar à cidade de origem. 
                </TextParagraph>
                <TextParagraph>
                    Ao aplicar OpenMP a um algoritmo genético para resolver o problema, podemos paralelizar as partes intensivas computacionalmente do algoritmo. A implementação escolhida visa paralelizar o algoritmo em blocos de treinamento, onde irão compartilhar memória e aprimorar o resultado final.
                </TextParagraph>

                <TitleMediumBackward>Implementação</TitleMediumBackward>
                <TextParagraph>
                    Para solucionar o Problema do Caixeiro Viajante escolhemos utilizar um algoritmo genético sequencial. Para isso, escolhemos a ideia de compartilhar entre os processos uma lista de candidatos denominados de “elite global”. As threads em paralelo possuem seu próprio algoritmo genético local, porém compartilham uma variável para obter a melhor elite.
                </TextParagraph>
                <TextParagraph>
                    De forma resumida, o algoritmo paralelo consiste em uma série de algoritmos sequenciais (denominados de “centros de treinamento”) executados um em cada thread. À medida que o algoritmo avança, assim que completar um número X de rodadas, faz a verificação e inferência na memória compartilhada.
                </TextParagraph>
                <TextParagraph>
                    Portanto, a ideia principal da paralelização é compartilhar eventuais “ótimos resultados” obtidos durante a execução, evitando assim que os centros de treinamento fiquem “presos” tentando achar uma solução.
                </TextParagraph>
                <Image src={traveller_genetic_parallel_diagram} alt='diagram of the problem solution archteture' width={'50%'}/>
                <TextParagraph>
                    Cada thread é inicializada com uma população de indivíduos aleatórios diferentes e se comunica com a memória compartilhada a cada 30 + (thread_id * 2) rodadas. Abaixo o laço “for” principal paralelizado pelo OpenMP:
                </TextParagraph>
                <Code>
                    <p>#pragma omp parallel private ( i ) shared ( elite, eliteSumDistance )</p>
                    <p>#pragma omp for schedule (dynamic)</p>
                </Code>
                <TextParagraph>
                    Onde “elite” é a elite global e “eliteSumDistance” a soma total das distâncias da elite global.
                </TextParagraph>
                <TitleMediumBackward>Exemplo de execução</TitleMediumBackward>
                <br/>
                <FlexImageBlock>
                    <Image src={traveller_genetic_parallel_run1} alt='a image showing a terminal executing the algorithm with 8 threads' width={'40%'}/>
                    <Image src={traveller_genetic_parallel_run2} alt='a image showing a terminal executing the algorithm with 4 threads' width={'40%'}/>
                </FlexImageBlock>

                
            </ContentBlock>
        </Container>
    )
}

export default TravellerGeneticParallel