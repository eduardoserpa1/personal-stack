import styled from 'styled-components'

import ContentBlock from '../components/ContentBlock';

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;

    display:flex;
    justify-content: center;
    align-itens: center;

    
`


function Home() {
  return (
    <HomeContainer>
      <ContentBlock>

      </ContentBlock>
    </HomeContainer>
  );
}

export default Home;
