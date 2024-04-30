import { useEffect, useState } from 'react'
import styled from 'styled-components'


const NormalImage = styled.img`
    
`

const MaximizedScreen = styled.div`
    background-color: rgba(241, 241, 241, 0.5);
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items:center;
`

const MaximizedImage = styled.img`
    
`
 

function Image(props){
    const [maximized,setMaximized] = useState(true)

    const change = () => {
        const newValue = maximized ? false : true
        setMaximized(newValue)
    }

    if(maximized)
        return( <NormalImage src={props.src} alt={props.alt} width={props.width} onClick={change}/> )
    else
        return( 
            <MaximizedScreen>
                <MaximizedImage src={props.src} alt={props.alt} width={props.width} onClick={change}/> 
            </MaximizedScreen>
        )

}

export default Image;