import React, {useState, useEffect} from 'react';
import Details from '../../templates/Details';
import Container from '../../atoms/Container';
import Loader from '../../atoms/Loader';
import { useParams } from 'react-router-dom';
import GenericErrorScreen from '../GenericErrorScreen';

const DetailPage = () => {
  const {id} = useParams()
  
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorFetch, setErrorFetch] = useState({
    status: false,
    message: undefined
  });

  useEffect(() => {
    let headers = new Headers();
    headers.append("X-API-Key", "SWKIsiZRVGnGfdaT7dE5vm2lFcwwlQkhRtfKRkSi");
    fetch(`https://api.propublica.org/congress/v1/members/${id}.json`,{
      headers: headers
    })
    .then(response => response.json())
    .then(data => setData(data))
    .catch((e) => {
      setIsLoading(false);
      setErrorFetch({status: true, message: e.message})
    })
  }, [id]);

  useEffect(() => {
    if (data !== false) {
      setIsLoading(false);
    }
  }, [data]);

  if (isLoading) {
    return(
      <Container justify="center" align="center" width="100%" bgColor="#333">
        <Loader/>
      </Container>
    )
  }

  if (data === false || errorFetch.status) {
    return(
      <GenericErrorScreen errorMessage={errorFetch.message} />
    )
  }

  return(
    <Details data={data.results[0]}/>
  );
};

DetailPage.displayName = "DetailPage";

export default DetailPage;