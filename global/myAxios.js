import axios from 'axios';


export const get = axios.get;
export const post = axios.post;
export const put = axios.put;
export const del = axios.delete;


export const Axios = (axiosFn, address, body, onSuccess, onError) => {
  return axiosFn(address, body,
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    .then(function (response) {
      console.warn('axios response --->', response);
      if (response.status === 200) {
        onSuccess && onSuccess(response.data);
      } else {
        onError && onError(response.statusText);
      }
    })
    .catch(function (err) {
      console.warn('axios error ===>', err.response);
      onError && onError(err.response);

    });
};
