import styled from 'styled-components'
import ContentBlock from '../../components/Core/ContentBlock';
import Image from '../../components/Core/Image';
import { SubTitle, TextParagraph, Title, TitleMedium, TitleMediumBackward, TitleShort } from '../../components/Core/SingleStyledComponents';
import Container from '../../components/Core/Container'
import diagram from '../../visual/images/backend-spring-microservices-diagram.png'

function BackendSpringMicroservices() {
  return (
    <Container>
     <ContentBlock>
      <Title>backend-spring-microservices</Title>
      <SubTitle>RestAPI Spring implementada com arquitetura de micro-serviços</SubTitle>
      <TextParagraph>
        Essa aplicação implementa um sistema acadêmico simples desenvolvido utilizando Java com Spring Framework. A API utiliza o banco de dados Postgres e JPA.   
        Para executar a aplicação basta somente configurar o banco de dados postgresql e ajustar a referência dos dados no projeto
      </TextParagraph>
      <TextParagraph>
        O sistema de login foi desenvolvido da maneira mais simples possivel, armazenando apenas um valor booleano em sessão para validar se possui algum usuario conectado ou não, sem utilizar nenhum framework específico para isso.
        Caso o login não seja feito nenhuma das operações (exceto os endpoints de /user/*) pode ser efetuada.
      </TextParagraph>
      <Image src={diagram} alt="diagrama de classes" width="40%"></Image>
      <TitleMediumBackward>Funcionalidades (endpoints)</TitleMediumBackward>
      <TitleMedium>User</TitleMedium>
      <TitleShort>user/</TitleShort>
      <TextParagraph>retorna o status da sessão.</TextParagraph>
      <TitleShort>user/create</TitleShort>
      <TextParagraph>cria um novo usuário.</TextParagraph>
      <TitleShort>user/login</TitleShort>
      <TextParagraph>efetua login alterando o status para true.</TextParagraph>
      <TitleShort>user/logout</TitleShort>
      <TextParagraph>efetua o logout alterando o status para false.</TextParagraph>

      <TitleMedium>Turma</TitleMedium>
      <TitleShort>turma/create</TitleShort>
      <TextParagraph>cria uma nova turma.</TextParagraph>
      
      <TitleMedium>Matricula</TitleMedium>
      <TitleShort>matricula/cadastrar</TitleShort>
      <TextParagraph>registra uma nova matricula através do número de matricula, id da disciplina e o id da turma.</TextParagraph>
      
      <TitleMedium>Estudante</TitleMedium>
      <TitleShort>estudante/</TitleShort>
      <TextParagraph>retorna todos os estudantes cadastrados.</TextParagraph>
      <TitleShort>estudante/matricula/{"{"}matricula{"}"}</TitleShort>
      <TextParagraph>retorna apenas o estudante que possuir a matricula informada.</TextParagraph>
      <TitleShort>estudante/nome/{"{"}nome{"}"}</TitleShort>
      <TextParagraph>retorna os estudantes que possuirem o nome informado.</TextParagraph>
      <TitleShort>estudante/create</TitleShort>
      <TextParagraph>cria um novo estudante.</TextParagraph>
      
      <TitleMedium>Disciplina</TitleMedium>
      <TitleShort>disciplina/create</TitleShort>
      <TextParagraph>cria uma nova disciplina</TextParagraph>

      <TitleMedium>Consulta</TitleMedium>
      <TitleShort>consulta/turmas_disciplinas</TitleShort>
      <TextParagraph>retorna as turmas e disciplinas que um estudante informado por parâmetro possua no sistema.</TextParagraph>
      <TitleShort>consulta/estudante_turma</TitleShort>
      <TextParagraph>retorna todos os estudantes de uma determinada turma informada.</TextParagraph>
      <TitleShort>consulta/estudante_disciplina</TitleShort>
      <TextParagraph>retorna todos os estudantes de uma determinada disciplina informada.</TextParagraph>

     </ContentBlock>
    </Container>
  );
}

export default BackendSpringMicroservices;