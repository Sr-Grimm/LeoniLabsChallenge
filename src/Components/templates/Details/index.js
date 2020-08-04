import React from 'react';
import Container from '../../atoms/Container';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import SocialNetworkGroup from '../../molecules/SocialNetworkGroup';
import {
  Link
} from "react-router-dom";
import getAge from '../../../utils/getAge';
import {StyledList} from './style';

const TextWithMargin = (props) => {
  return(
    <Text margin="6px 0px 0px 0px" {...props}/>
  )
}

const Details = ({data}) => {
  const roles = data.roles.map((i) => {
    const text = `${i.title} at congress ${i.congress} on ${i.chamber}:`
  return(
    <li key={text}>
      <Text size="20px" color="white">
        {text}
      </Text>
      <Container flexD="column" ml="16px" mb="12px">
        {
          !!i.office && (
            <TextWithMargin color="white">
              {`Office: ${i.office}`}
            </TextWithMargin>
          )
        }
        {
          !!i.phone && (
            <TextWithMargin color="white">
              {`Phone Number: ${i.phone}`}
            </TextWithMargin>
          )
        }
        {
          !!i.seniority && (
            <TextWithMargin color="white">
              {`Seniority: ${i.seniority}`}
            </TextWithMargin>
          )
        }
        {
          !!i.start_date && (
            <TextWithMargin color="white">
              {`Start date: ${i.start_date}`}
            </TextWithMargin>
          )
        }
        {
          !!i.end_date && (
            <TextWithMargin color="white">
              {`End date: ${i.end_date}`}
            </TextWithMargin>
          )
        }
      </Container>
    </li>
  );
  });

  return(
    <Container padding="1%" flexD="column" bgColor="#333" align="center" justify="space-between" width="98%" height="95.5%">
      <Container align="center" flexD="column">
        <Text color="white" size="3em" textDecoration="underline">
          {`${data.first_name} ${!!data.middle_name ? data.middle_name : ""} ${data.last_name}`}
        </Text>
        <Text color="white">
          {`Last update ${data.last_updated}`}
        </Text>
      </Container>
      <Container  width="100%" height="100%" justify="space-around" align="center">
          <Container margin="0px 16px" width="20%" height="100%" flexD="column">
            <Text size="24px" color="white">
              {`Personal Information:`}
            </Text>
          <Container flexD="column" height="100%" width="100%" >
            <TextWithMargin color="white">
              {`Born: ${data.date_of_birth}`}
            </TextWithMargin>
            <TextWithMargin color="white">
              {`ID: ${data.id}`}
            </TextWithMargin>
            <TextWithMargin color="white">
              {`Current party: ${data.current_party}`}
            </TextWithMargin>
            <TextWithMargin color="white">
              {`Gender: ${data.gender}`}
            </TextWithMargin>
            <TextWithMargin color="white">
              {`Age: ${getAge(data.date_of_birth)}`}
            </TextWithMargin>
          </Container>
        </Container>
        <Container margin="0px 16px" width="80%" height="100%" flexD="column">
          <Text size="24px" color="white">
            {`Role information:`}
          </Text>
          <Container height="100%" width="100%" overflow="scroll">
            <StyledList>
              {roles}
            </StyledList>
          </Container>
        </Container>
      </Container>
      
      <Container width="100%" flexD="column" height="20%" align="center" justify="flex-end">
      <SocialNetworkGroup
        twitter={data.twitter_account}
        facebook={data.facebook_account}
        youtube={data.youtube_account}
        webpage={data.url}
      />
      <Link to="/searcher">
        <Text color="#99f">
          Go back
        </Text>
      </Link>
      </Container>
    </Container>
  );
};


Details.propTypes = {
  data: PropTypes.object.isRequired,
};

Details.displayName = "Details";

export default Details;