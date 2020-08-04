import styled from 'styled-components'

const StyledText = styled.p`
  text-align: ${props => props.align};
  color: ${props => props.color};
  font-size: ${props => props.size};
  margin: ${props => props.margin};
  paddin: ${props => props.padding};
  text-decoration: ${props => props.textDecoration}
`

StyledText.displayName = "StyledText";

export {StyledText};
