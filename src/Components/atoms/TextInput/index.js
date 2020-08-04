import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const TextInput = ({active, itemData, setSlot, formattedName}) => {

  const [textValue, setTextValue] = useState("");

  const handleChange = (value) => {
    setTextValue(value);
    setSlot(itemData, value);
  }

  useEffect(() => {
    setTextValue("");
  }, [active])

  return(
    <input disabled={active} value={textValue} placeholder={formattedName} onChange={(e) => {
      handleChange(e.target.value)
    }} type="text"/>
  );
};

TextInput.propTypes = {
  active: PropTypes.bool,
  itemData: PropTypes.string.isRequired,
  setSlot: PropTypes.func.isRequired,
  formattedName: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  active: false
};

TextInput.displayName = "TextInput";

export default TextInput;