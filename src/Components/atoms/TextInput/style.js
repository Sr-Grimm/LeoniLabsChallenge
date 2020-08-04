import styled from 'styled-components';

const StyledTextInput = styled.input`
  width: ${props => props.width};
  text-align: center;
  &::placeholder {
    text-align: center;
  }
`

StyledTextInput.displayName = "StyledTextInput";

export {StyledTextInput};