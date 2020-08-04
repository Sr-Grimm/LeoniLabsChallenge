import React from 'react';
import Container from '../../atoms/Container';
import Text from '../../atoms/Text';
import SocialNetworkLink from '../../atoms/SocialNetworkLink';

const Footer = () => {
  return(
    <Container bgColor="black" justify="space-around" align="center" width="100%" height="5%">
      <Text color="white" size="15px">
        Create react app used
      </Text>
      <Container justify="center" align="center" overflow="hidden">
        <Text margin="0px 8px 0px 0px"  color="white" size="15px">
          Created by Agustin Fredes
        </Text>
        <SocialNetworkLink size="20px" url="https://www.linkedin.com/in/agustinfredes/" icon="linkedin" color="#0e76a8"/>
      </Container>
    </Container>
  );
};

Footer.displayName = "Footer";

export default Footer;