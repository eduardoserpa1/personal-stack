import styled from 'styled-components'

const SessionDropdownContainer = styled.div`
    position: fixed;
    right: 0;    
   
    margin-top: 64px;
    
    width: 250px;
    height: 200px;

    background-color: wheat;
    border: solid 1px #f1f1f1;

    display: ${props => props.displayVisibility};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
`

function SessionDropdown({displayVisibility}){
    return(
        <SessionDropdownContainer displayVisibility={displayVisibility}>
            <p>Modulo ainda não implementado.</p>
        </SessionDropdownContainer>
    )
}

export default SessionDropdown;