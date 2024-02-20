import styled from 'styled-components'


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const H1White = styled.div`
    font-family: Roboto;
    margin: 0;
    font-size: 48px;
    color: white;
`

function Home() {
  return (
    <AppContainer>
      <H1White>THIS IS HOME ROUTE PAGE</H1White>
    </AppContainer>
  );
}

export default Home;
