import axios from 'axios';

export const getApiUrl = (path) =>{
  // return `http://aqueous-spire-70930.herokuapp.com/postagens${path}`;
  return `http://aqueous-spire-70930.herokuapp.com/postagens${path}?format=json`;
}

export const apiGet = (path) => {
  const url = getApiUrl(path);
  const options = {};
  
  return axios.get(url, options);
}