import styled from 'styled-components'

const MenuItem = styled.span`
    background-color: #f9f9f9;

    width: 120px;
    height: 100%;
    border-left: solid 1px #f1f1f1;
    border-right: solid 1px #f1f1f1;
    
    display: flex;
    justify-content: center;
    align-items: center;

    text-shadow: 1px 1px 1px #e1e1e1;

    color:black;
    
    &:hover{
        background-color: #eaeaea;
        cursor: pointer;
    }
`

export default MenuItem;