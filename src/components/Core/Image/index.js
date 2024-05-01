import { useEffect, useState } from 'react'
import styled from 'styled-components'


const NormalImage = styled.img`
    
`

const MaximizedScreen = styled.div`
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
const MaximizedScreenBox = styled.div`
    background-color: rgba(0, 0, 0, 0.445);
    backdrop-filter: blur(8px);
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 1;
    
`

const MaximizedImage = styled.img`
    z-index: 2;
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
                <MaximizedScreenBox/>
            </MaximizedScreen>
        )

}

export default Image;