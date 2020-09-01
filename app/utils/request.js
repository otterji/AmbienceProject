import axios from 'axios';
import { localStorageData } from '../constants';

const getUserToken = () => {
  let idToken;
  try {
    idToken = localStorage.getItem(localStorageData.idToken);
  } catch (error) {
    // Error retrieving data
    idToken = null;
  }
  return `Bearer ${idToken}`;
};

export function errorHandler(error) {
  const { status } = error.response;
  if (status === 403) {
    alert('세션이 만료되었습니다 로그인페이지로 이동합니다.');
    window.location.href = '/login';
  } else if (status === 401) {
    window.location.href = `/`;
  } else if (status === 500) {
    window.location.href = `/error?message=${error.message}`;
  }
}

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.data;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  return {
    error,
    response,
  };
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export function getRequest({ url }) {
  const headers = {
    'Content-Type': 'application/json',
  };
  const idToken = getUserToken();
  if (idToken) {
    headers.Authorization = idToken;
  }
  const options = {
    method: 'GET',
    headers,
    url,
  };
  return axios(options)
    .then(checkStatus)
    .then(parseJSON);
}

export function postRequest({ url, payload }) {
  const headers = {
    'Content-Type': 'application/json',
  };
  const idToken = getUserToken();
  if (idToken) {
    headers.Authorization = idToken;
  }

  const options = {
    method: 'POST',
    headers,
    url,
    data: { ...payload },
  };

  return axios(options)
    .then(checkStatus)
    .then(parseJSON);
}

export function updateRequest({ url, payload }) {
  const headers = {
    'Content-Type': 'application/json',
  };
  const idToken = getUserToken();
  if (idToken) {
    headers.Authorization = idToken;
  }

  const options = {
    method: 'PUT',
    headers,
    url,
    data: { ...payload },
  };

  return axios(options)
    .then(checkStatus)
    .then(parseJSON);
}

export function deleteRequest({ url, payload }) {
  const headers = {
    'Content-Type': 'application/json',
  };
  const idToken = getUserToken();
  if (idToken) {
    headers.Authorization = idToken;
  }

  const options = {
    method: 'DELETE',
    headers,
    url,
    data: { ...payload },
  };

  return axios(options)
    .then(checkStatus)
    .then(parseJSON);
}

export const sendMail = () => {
  const link = `${'mailto:contact@pulitsoft.com' +
    '?clee@pulitsoft.com' +
    '&subject='}${encodeURIComponent('파트너쉽 문의드립니다')}`;
  // window.location.href = link;
  window.open(link, '_black');
};
