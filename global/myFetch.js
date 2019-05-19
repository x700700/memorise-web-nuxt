import fetch from 'fetch';


export const Fetch = (method, address, body, onSuccess, onError) => {
  return fetch(address,
    {
      method: method,
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: body
    })
    .then((response) => {
      console.warn('response --->', response);
      if (response.ok && response.status === 200) {
        // cookie.save('connect.sid', response['connect.sid']);
        return response.json();
      } else {
        console.warn('error (!=200) ===>', response);
        onError && onError(response.statusText);
      }
    })
    .then((data) => {
      console.warn('axios response --->', data);
      onSuccess && onSuccess(data);
    })
    .catch((error) => {
      console.warn('error ===>', error);
      onError && onError(error);
    });
};
