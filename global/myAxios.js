import axios from 'axios';


export const get = axios.get;
export const post = axios.post;
export const put = axios.put;
export const del = axios.delete;


export const Axios = (axiosFn, address, body, onSuccess, onError) => {
  return axiosFn(address, body,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    .then(function (response) {
      console.warn('axios response --->', response);
      onSuccess && onSuccess(response);
    })
    .catch(function (err) {
      console.warn('axios error ===>', err.response);
      onError && onError(err.response);

    });
};
