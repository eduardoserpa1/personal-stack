import styled from 'styled-components'

const SessionContainer = styled.div`
    background-color: #f9f9f9;
    width: 150px;
    height: 100%;
    
    border-left: solid 1px #f1f1f1;
    border-right: solid 1px #f1f1f1;
    
    display: flex;
    justify-content: center;
    align-items: center;

    text-shadow: 1px 1px #e1e1e1;

    &:hover{
        background-color: #f1f1f1;
        cursor: pointer;
    }
`
const Account = styled.span`
    font-size 20px;

    
`


function Session(){
    return (
      <SessionContainer>
            <Account>login</Account>
      </SessionContainer>
    )
}

export default Session;