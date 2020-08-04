import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '../../atoms/Container';
import Button from '../../atoms/Button';
import CheckBox from '../../atoms/CheckBox';
import RadioInput from '../../atoms/RadioInput';
import TextInput from '../../atoms/TextInput';
import Text from '../../atoms/Text';
import { useEffect } from 'react';
import formattedNames from './formattedNames';

const Searcher = ({search}) => {
  const [singleSearchType, setSingleSearchType] = useState("default");
  
  const toggleAdvanced = (state) => {
    if (state) {
      const newValues = {...searchValues, ...{[singleSearchType]: ""}}
      setSearchValues(newValues)
      setSearchQuery({isAdvanced: true, value: newValues});
    } else {
      setSearchQuery(
        {
          isAdvanced: false,
          value: {
            type: "default",
            value: ""
          },
        }
      )
    }
  };

  const [searchValues, setSearchValues] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    born_date: "",
    gender: "",
    party: "",
    default: ""
  });

  const [activeAdvancedSlots, setActiveAdvancedSlots] = useState({
    title: false,
    state: false,
    first_name: false,
    last_name: false,
    middle_name: false,
    born_date: false,
    party: false,
  })

  const [searchQuery, setSearchQuery] = useState({
    isAdvanced: false,
    value: {
      type: "default",
      value: ""
    },
  });

  useEffect(() => {
    if (!searchQuery.isAdvanced) {
      setSearchQuery(
        {
          isAdvanced: false,
          value: {
            type: singleSearchType,
            value: searchValues[singleSearchType]
          },
        }
      )
    } else {
      setSearchQuery(
        {
          isAdvanced: true,
          value: searchValues,
        }
      )
    }
    
  }, [singleSearchType, searchValues, searchQuery.isAdvanced]);

  const setSearchSlot = (key, value) => {
    const newState = {...searchValues, ...{[key]: value}}
    setSearchValues(newState)
  };

  const setSimpleType = (value) => {
    if (value !== searchValues[singleSearchType]) {
      const newValue = {...searchValues, ...{[value]: searchValues[singleSearchType], [singleSearchType]: ""}}
      setSearchValues(newValue);
      setSingleSearchType(value);
    }
  };

  const setGender = (value) => {
    setSearchSlot("gender", value)
  }

  const toggleSlot = (slot, value) => {
    const newSlots = {...activeAdvancedSlots, ...{[slot]: value}}
    setActiveAdvancedSlots(newSlots)
    if (!value) {
      setSearchSlot(slot, "")
    }
  }

  const simpleSearch = () => {
    return(
    <Container align="center" justify="flex-start" flexD="column">
      <Container flexD="column" margin="20px 0px 0px 0px">
        <input placeholder="Search here" onChange={(e) => {
          setSearchSlot(singleSearchType, e.target.value)
        }} type="text"/>
      </Container>
      <Container align="flex-start" flexD="column" margin="10px 0px">
        <RadioInput margin="5px 0px" returnValue={setSimpleType} group="simpleValue" value="first_name" label="First name"/>
        <RadioInput margin="5px 0px" returnValue={setSimpleType} group="simpleValue" value="last_name" label="Last name"/>
        <RadioInput margin="5px 0px" returnValue={setSimpleType} group="simpleValue" value="middle_name" label="Middle name"/>
        <RadioInput margin="5px 0px" returnValue={setSimpleType} group="simpleValue" value="born_date" label="Birth date"/>
        <RadioInput margin="5px 0px" returnValue={setSimpleType} group="simpleValue" value="party" label="Party"/>
      </Container>
    </Container>
    );
  };

  const advancedSearch = () => {
    return(
      <Container margin="20px 0px 10px 0px" align="center" justify="flex-start" flexD="column">
        <Container mb="16px" align="center" justify="flex-start" flexD="column">
          <Text textDecoration="underline" color="white">
            Gender:
          </Text>
          <Container>
            <RadioInput margin="5px 0px" returnValue={setGender} group="simpleValue" value="M" label="Male"/>
            <RadioInput margin="5px 0px" returnValue={setGender} group="simpleValue" value="" label="All"/>
            <RadioInput margin="5px 0px" returnValue={setGender} group="simpleValue" value="F" label="Female"/>
          </Container>
        </Container>
        <Container mb="16px" align="center" justify="flex-start" flexD="column">
          {Object.keys(searchValues).map((i) => {
            if (formattedNames[i]) {
              return(
                <Container margin="3px 0px" key={`${i}-text-input`} flexD="column" align="center" justify="center">
                  <Container align="center" justify="flex-start">
                    <CheckBox toggle={(value) => toggleSlot(i, value)}></CheckBox>
                    <TextInput itemData={i} setSlot={setSearchSlot} active={!activeAdvancedSlots[i]} formattedName={formattedNames[i]}/>
                  </Container>
                </Container>
                )
              }
            return null;
          })}
          </Container>
        </Container>
    )
  }

  return(
    <Container align="center" justify="flex-start" flexD="column" bgColor="#333" width="20%" mr="8px" height="100%">
      <CheckBox margin="16px 0px 0px 0px" label="Advanced Search" toggle={toggleAdvanced}/>
      {searchQuery.isAdvanced ? (advancedSearch()) : simpleSearch()}
      <Button onClick={() => {search(searchQuery)}} label="Search" borderRadius="3px" padding="4px 8px" bgColor="#222" color="white"/>
    </Container>
  );
};

Searcher.propTypes = {
  search: PropTypes.func.isRequired
}

Searcher.displayName = "Searcher";

export default Searcher;