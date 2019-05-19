
export const Axios = (axiosFn, address, body, onSuccess, onError) => {
  return axiosFn(address, body)
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
