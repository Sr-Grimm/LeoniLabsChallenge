import React from 'react';
import PropTypes from 'prop-types';
import {StyledButton} from './style';

const Button = (props) => {
  const {label} = props;
  return(
    <StyledButton {...props}>
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.string,
  borderWidth: PropTypes.string,
  borderStyle: PropTypes.string,
  borderColor: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  label: PropTypes.string.isRequired
};

Button.defaultProps = {
  width: "auto",
  height: "auto",
  bgColor: "initial",
  color: "initial",
  borderRadius: "0px",
  borderWidth: "0px",
  borderStyle: "solid",
  borderColor: "transparent",
  margin: "0px",
  padding: "0px"
};

Button.displayName = "CustomButton";

export default Button;