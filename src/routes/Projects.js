import styled from 'styled-components'
import Container from '../components/Core/Container'
import ContentBlock from '../components/Core/ContentBlock'
import Card from '../components/Core/Card'

const ProjectsContentBlock = styled(ContentBlock)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  flex-wrap: wrap;
`

function Projects() {
  return (
    <Container>
     <ProjectsContentBlock>
     
      <Card> teste </Card>
      <Card> teste </Card>
      <Card> teste </Card>
      <Card> teste </Card>
      <Card> teste </Card>
      <Card> teste </Card>
      <Card> teste </Card>
      <Card> teste </Card>

     </ProjectsContentBlock>
    </Container>
  );
}

export default Projects;
