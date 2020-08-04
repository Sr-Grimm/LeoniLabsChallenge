import styled from 'styled-components';
import Container from "../../atoms/Container";

const StyledMemberCard = styled(Container)`
box-shadow: 5px 5px 3px 3px #111;
transition: 500ms;
&:hover {
  transform: scale(1.05)
}
`

export {StyledMemberCard};