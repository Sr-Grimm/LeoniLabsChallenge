import React, { useState } from 'react';
import Container from '../../atoms/Container';
import { useEffect } from "react";
import Searcher from '../../templates/Searcher';
import Results from '../../templates/Results';
import GenericErrorScreen from '../GenericErrorScreen';
import doSearch from '../../../utils/doSearch';

const SearchPage = () => {
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState({})
  const [errorFetch, setErrorFetch] = useState({
    state: false,
    message: undefined
  });

  
  useEffect(() => {
    let headers = new Headers();
    headers.append("X-API-Key", "SWKIsiZRVGnGfdaT7dE5vm2lFcwwlQkhRtfKRkSi");
    fetch('https://api.propublica.org/congress/v1/116/senate/members.json',{
      headers: headers
    })
    .then(response => response.json())
    .then(data => setData(data))
    .catch((e) => {
      setErrorFetch({state: true, message: e.message})
    })
  }, []);
  
  const searchHandler = (params) => {
    console.log(params)
    if (params.value.type !== "default") {
      doSearch(params, setQuery);
    } else {
      alert("Please select a field to search");
    }
  }

  useEffect(() => {
    if (data !== false) {
      setIsLoading(false);
    }
  }, [data]);

  if (errorFetch.state) {
    return(
      <GenericErrorScreen errorMessage={errorFetch.message} />
    )
  };

  return(
    <Container width="100%" height="100%">
      <Searcher search={searchHandler}></Searcher>
      <Results query={query} data={data} isLoading={isLoading}></Results>
    </Container>
  );
};

SearchPage.displayName = "SearchPage";

export default SearchPage;