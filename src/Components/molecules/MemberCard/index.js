import React from "react";
import PropTypes from "prop-types";
import {StyledMemberCard} from "./style";
import Text from "../../atoms/Text";
import Container from '../../atoms/Container';
import SocialNetworkGroup from '../../molecules/SocialNetworkGroup';
import {
  Link
} from "react-router-dom";

const MemberCard = ({data}) => {
  console.log("Spawned")
  return(
    <StyledMemberCard 
    bgColor="#DDDDDD"
    bRadius="10px"
    align="center"
    justify="space-between"
    margin="16px"
    width="170px"
    height="210px"
    flexD="column"
    >
      <Container flexD="column">
        <Text margin="0px 0px 4px 0px" textDecoration="underline" align="center" size="20px">
          {`${data.first_name} ${data.middle_name ? data.middle_name : ""} ${data.last_name}`}
        </Text>
        <Text align="center" size="18px">
          {`${data.title}`}
        </Text>
      </Container>

      <Text align="center" size="14px">
        {`ID: ${data.id}`}
      </Text>
      
      <Container align="center" justify="flex-end" flexD="column" width="100%" height="50%">
        <SocialNetworkGroup
          webpage={data.url}
          twitter={data.twitter_account}
          youtube={data.youtube_account}
          facebook={data.facebook_account}
        />
        <Link to={`/detail/${data.id}`} params={{ data }}>
          <Text color="#00009a">
            More details
          </Text>
        </Link>
      </Container>
      
    </StyledMemberCard>
  );
};

MemberCard.propTypes = {
  data: PropTypes.object.isRequired
};

MemberCard.displayName = "MemberCard";

export default MemberCard;