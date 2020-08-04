import React from "react";
import PropTypes from "prop-types";
import {StyledText} from './style';

const Text = props => {
  return(
    <StyledText {...props}>
      {props.children}
    </StyledText>
  );
};

Text.propTypes = {
  textDecoration: PropTypes.string,
  align: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

Text.defaultProps = {
  textDecoration: "none",
  align: "left",
  color: "black",
  size: "16px",
  margin: "0px",
  padding: "0px",
};

Text.displayName = "CustomText";

export default Text