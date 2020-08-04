import styled from 'styled-components'

const StyledContainer = styled.div`
background-color: ${props => props.bgColor};
overflow: ${props => props.overflow};
display: flex;
overflow-x: hidden;
flex-direction: ${props => props.flexD};
flex-wrap: ${props => props.flexW};
justify-content: ${props => props.justify};
align-items: ${props => props.align};
height: ${props => props.height};
max-height: ${props => props.maxHeight};
min-height: ${props => props.minHeight};
max-width: ${props => props.maxWidth};
min-width: ${props => props.minWidth};
width: ${props => props.width};
margin: ${props => props.margin};

border-radius: ${props => props.bRadius};
border: ${props => `${props.bWidth} ${props.bStyle} ${props.bColor}`};

margin-top: ${props => props.mt ? props.mt : props.margin};
margin-bottom: ${props => props.mb ? props.mb : props.margin};
margin-left: ${props => props.ml ? props.ml : props.margin};
margin-right: ${props => props.mr ? props.mr : props.margin};

padding: ${props => props.padding};

padding-top: ${props => props.pt ? props.pt : props.padding};
padding-bottom: ${props => props.pb ? props.pb : props.padding};
padding-left: ${props => props.pl ? props.pl : props.padding};
padding-right: ${props => props.pr ? props.pr : props.padding};
`

StyledContainer.displayName = "StyledContainer";

export {StyledContainer}