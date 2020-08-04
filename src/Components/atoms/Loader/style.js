import styled, {keyframes} from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const StyledLoader = styled.div`
  border: ${props => props.bWidth} solid #eee; 
  border-top: ${props => props.bWidth} solid #000;
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
  animation: ${spin} ${props => props.animationTime} linear infinite;
`

export default StyledLoader;