import React from 'react';
import {StyledContainer} from './style';
import PropTypes from 'prop-types';

const Container = (props) => {
  return(
    <StyledContainer {...props}>
      {props.children}
    </StyledContainer>
  );
};

Container.propTypes = {
  bgColor: PropTypes.string,
  overflow: PropTypes.string,
  bRadius: PropTypes.string,
  bColor: PropTypes.string,
  bStyle: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  flexD: PropTypes.string,
  flexW: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
  mr: PropTypes.string,
  padding: PropTypes.string,
  pt: PropTypes.string,
  pb: PropTypes.string,
  pl: PropTypes.string,
  pr: PropTypes.string,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
};

Container.defaultProps = {
  bgColor: "transparent",
  overflow: "hidden",
  bRadius: "0px",
  bColor: "black",
  bStyle: "solid",
  justify: "initial",
  align: "initial",
  flexD: "row",
  flexW: "no-wrap",
  height: "auto",
  width: "auto",
  margin: "0px",
  padding: "0px",
  maxHeight: "auto",
  minHeight: "auto",
  maxWidth: "auto",
  minWidth: "auto",
};

Container.displayName = "Container";

export default Container;