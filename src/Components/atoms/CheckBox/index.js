import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {StyledCheck} from './style';
import Container from '../Container';
import Text from '../Text';

const CheckBox = ({disable, toggle, label, margin}) => {
  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setChecked(e.target.checked);
    toggle(e.target.checked)
  }

  useEffect(() =>{
    if (disable) {
      setChecked(false)
    }
  }, [disable])

  return(
    <Container margin={margin}>
      <StyledCheck disabled={disable} checked={checked} onChange={handleChange} type="checkbox"/>
      <Text color="white">
        {label}
      </Text>
    </Container>
  );
};

CheckBox.propTypes = {
  toggle: PropTypes.func.isRequired,
  margin: PropTypes.string,
  label: PropTypes.string,
}

CheckBox.defaultProps = {
  margin: "0px",
  label: ""
}

CheckBox.displayName = "CheckBox";

export default CheckBox;