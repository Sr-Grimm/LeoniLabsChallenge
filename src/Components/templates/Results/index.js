import React, { useEffect, useState } from 'react';
import Container from '../../atoms/Container';
import Loader from '../../atoms/Loader';
import MemberCard from '../../molecules/MemberCard';
import PropTypes from 'prop-types';
import doFilter from '../../../utils/doFilter';

const Results = ({isLoading, data, query}) => {

  const [queryList, setQueryList] = useState([])

  useEffect(() => {
    console.log(query)
    setQueryList(query)
  }, [query])
  
  if (isLoading === true) {
    return(
      <Container bgColor="#333" align="center" justify="center" width="80%" height="100%">
          <Loader></Loader>
      </Container>
    );
  };

  const listOfMembers = data.results[0].members.filter((i) => {
    return doFilter(i, queryList)
  }).map((i) => {
    return <MemberCard data={i} key={i.id}></MemberCard>
  }).filter((i) => i !== undefined);

  return(
    <Container overflow="scroll" bgColor="#333" align="center" justify="center" flexW="wrap" width="80%" height="100%" maxWidth="100%">
      {listOfMembers}
    </Container>
  );
};

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]).isRequired,
}

Results.displayName = "Results";

export default Results;