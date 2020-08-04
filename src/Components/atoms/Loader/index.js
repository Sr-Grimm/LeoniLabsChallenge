import React from 'react';
import StyledLoader from './style';
import PropTypes from 'prop-types';

const Loader = (props) => {
  return(
    <StyledLoader {...props}/>
  );
};

Loader.propTypes = {
  bWidth: PropTypes.string,
  size: PropTypes.string,
  animationTime: PropTypes.string
};

Loader.defaultProps = {
  bWidth: "16px",
  size: "100px",
  animationTime: "2s",
};

Loader.displayName = "Loader";


export default Loader;