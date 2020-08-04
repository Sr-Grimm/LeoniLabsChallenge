import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {StyledTextInput} from './style';

const TextInput = ({active, itemData, setSlot, formattedName, width}) => {

  const [textValue, setTextValue] = useState("");

  const handleChange = (value) => {
    setTextValue(value);
    setSlot(itemData, value);
  }

  useEffect(() => {
    setTextValue("");
  }, [active])

  return(
    <StyledTextInput
      width={width}
      disabled={active}
      value={textValue}
      placeholder={formattedName}
      onChange={(e) => {
        handleChange(e.target.value)
      }} type="text"
    />
  );
};

TextInput.propTypes = {
  width: PropTypes.string,
  active: PropTypes.bool,
  itemData: PropTypes.string.isRequired,
  setSlot: PropTypes.func.isRequired,
  formattedName: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  width: "70%",
  active: false
};

TextInput.displayName = "TextInput";

export default TextInput;