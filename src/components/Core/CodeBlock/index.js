import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const CodeBlock = styled(ReactMarkdown)`
    background-color: #dfdfdf;

    width: 90%;

    border: solid 3px #dfdfdf;
    border-radius: 5px;

    padding-left: 10px;
    padding-right: 10px;

    box-shadow: 0px 0px 10px #dfdfdf; 
    
`

export default CodeBlock