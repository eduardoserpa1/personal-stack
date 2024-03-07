import styled from 'styled-components'
import ContentBlock from '../components/Core/ContentBlock'

const AuthorContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display:flex;
    justify-content: center;
    align-itens: center; 
`


function Author() {
  return (
    <AuthorContainer>
      <ContentBlock>
        treste
      </ContentBlock>
    </AuthorContainer>
  );
}

export default Author;
