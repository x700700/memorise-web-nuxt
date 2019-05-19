import axios from 'axios';

export const Axios = (address, body, onSuccess, onError) => {
  return axios
    .post(address, body, {
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
      onError && onError(err);

    });
};
