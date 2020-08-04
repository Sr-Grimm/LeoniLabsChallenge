import React from 'react';
import {StyledRadioInput} from './style';
import PropTypes from 'prop-types';
import Container from '../Container';
import Text from '../Text';

const RadioInput = ({returnValue, label, margin, group, value}) => {
  const handleChange = (e) => {
    returnValue(e.target.value);
  };

  return(
    <Container margin={margin}>
      <StyledRadioInput onChange={handleChange} value={value} name={group} type="radio"/>
      <Text margin="0px 0px 0px 4px" color="white">
        {label}
      </Text>
    </Container>
  );
};

RadioInput.propTypes = {
  returnValue: PropTypes.func.isRequired,
  margin: PropTypes.string,
  label: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

RadioInput.defaultProps = {
  margin: "0px"
};


RadioInput.displayName = "RadioInput";

export default RadioInput;