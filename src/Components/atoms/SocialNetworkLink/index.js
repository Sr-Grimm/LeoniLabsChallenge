import React from 'react';
import PropTypes from 'prop-types';
import {StyledLink} from './style';
import Text from '../Text';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaGlobeAmericas,
  FaLinkedin
} from "react-icons/fa";

const iconSelector = (icon) => {
  switch (icon) {
    case "twitter":
      return <FaTwitterSquare/>;
    case "youtube":
      return <FaYoutubeSquare/>;
    case "facebook":
      return <FaFacebookSquare/>;
    case "web":
      return <FaGlobeAmericas/>;
    case "linkedin":
      return <FaLinkedin/>;
    default:
      break;
  };
};

const SocialNetworkLink = ({url, icon, color, size}) => {
  return(
    <StyledLink target="_blank" href={url}>
      <Text color={color} size={size}>
        {iconSelector(icon)}
      </Text>
    </StyledLink>
  );
};

SocialNetworkLink.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  url: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(["twitter","youtube","facebook","web","linkedin"]).isRequired
};

SocialNetworkLink.defaultProps = {
  color: undefined,
  size: "24px",
};

SocialNetworkLink.displayName = "SocialNetworkLink";

export default SocialNetworkLink;