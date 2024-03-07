import styled from 'styled-components'

const TitleContainer = styled.div`
`

const ColoredText = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.textColor || 'black'};
    text-shadow: 1px 1px 2px #d0d0d0;
`


function TitleRandomColored(){
    const logoNames = [ "jers.dev", "eduardo.serpa", "cloud.aws", "personal.stack", "react.dev", "java.dev", "code.head" ];

    const colorPalette = ["SteelBlue","Tomato","Indigo","Gold","OliveDrab","LightSalmon", "Turquoise", 
                            "MediumSlateBlue", "FireBrick", "ForestGreen", "DarkRed", "DeepSkyBlue",
                            "Brown", "Crimson", "DarkOrange", "Orange"]

    const randomChoiceNameIndex = Math.floor(Math.random() * logoNames.length);
    
    const titleSplit = logoNames[randomChoiceNameIndex].split(".")
    const first = titleSplit[0]
    const second = titleSplit[1]

    const braceColor = colorPalette[Math.floor(Math.random() * colorPalette.length)]
    const firstColor = colorPalette[Math.floor(Math.random() * colorPalette.length)]
    const secondColor = colorPalette[Math.floor(Math.random() * colorPalette.length)]

    return (
        <TitleContainer>
            <ColoredText textColor={braceColor}>{"{"}</ColoredText>
            <ColoredText textColor={firstColor}>{first}</ColoredText>
            .
            <ColoredText textColor={secondColor}>{second}</ColoredText>
            <ColoredText textColor={braceColor}>{"}"}</ColoredText>
        </TitleContainer>
    )
}

export default TitleRandomColored;