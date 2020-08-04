import React from "react";
import Container from '../../atoms/Container';
import SocialNetworkLink from '../../atoms/SocialNetworkLink';
import PropTypes from 'prop-types';

const SocialNerworkGorup = ({webpage, facebook, twitter, youtube}) => {
  return(
    <Container mb="8px" width="100%" overflow="hidden" flexW="wrap" justify="space-around">
      {!!webpage && <SocialNetworkLink url={webpage} icon="web"/>}
      {!!facebook && 
      <SocialNetworkLink 
        color="#3b5998"
        url={`https://www.facebook.com/${facebook}`}
        icon="facebook"
      />}
      {!!twitter && 
      <SocialNetworkLink 
        color="#00acee"
        url={`https://www.twitter.com/${twitter}`}
        icon="twitter"
      />}
      {!!youtube && 
      <SocialNetworkLink 
        color="#FF0000"
        url={`https://www.youtube.com/${youtube}`}
        icon="youtube"
      />}
    </Container>
  );
};

SocialNerworkGorup.propTypes = {
  webpage: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  youtube: PropTypes.string
};

SocialNerworkGorup.defaultProps = {
  webpage: "",
  facebook: "",
  twitter: "",
  youtube: ""
};

SocialNerworkGorup.displayName = "SocialNerworkGorup";

export default SocialNerworkGorup;