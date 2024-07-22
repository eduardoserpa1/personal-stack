import styled from 'styled-components'
import Container from '../components/Core/Container'
import ContentBlock from '../components/Core/ContentBlock'
import Card from '../components/Core/Card'
import { useEffect, useState } from 'react'
import projects_data from '../data/projects.json'

const ProjectsContentBlock = styled(ContentBlock)`
width: 100vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  flex-wrap: wrap;

  padding-top: 1%;
`

function Projects() {
  const data = projects_data.data

  return (
    <Container>
     <ProjectsContentBlock>
     {
      data.length > 0 ? data.map( project => {
        return <Card routename={project.routename} title={project.title} desc={project.description} link={project.link} tecnologies={project.tecnologies}/>
      } ) : <span>erro ao carregar os dados.</span> 
     }
     </ProjectsContentBlock>
    </Container>
  );
}

export default Projects;
