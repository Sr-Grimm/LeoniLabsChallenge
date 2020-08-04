import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-radius: ${props => props.borderRadius};
  border: ${props => `${props.borderWidth} ${props.borderStyle} ${props.borderColor}`};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  outline: none;
  transition: 300ms;
  &:hover {
    transform: scale(1.05);
    transition: 100ms;
  }
  &:active {
    transform: scale(0.95);
  };
  box-shadow: 1px 1px 1px 1px #111;
`

StyledButton.displayName = "StyledButton";

export {StyledButton};