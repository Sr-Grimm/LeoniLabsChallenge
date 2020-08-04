import React from 'react';
import Container from '../../atoms/Container';
import Text from '../../atoms/Text';

const Header = () => {
  return(
    <Container bgColor="black" width="100%" height="10%" justify="center" align="center">
      <Text color="white" size="30px">
        LeoniLabs Searcher
      </Text>
    </Container>
  );
};

Header.displayName = "Header";

export default Header;