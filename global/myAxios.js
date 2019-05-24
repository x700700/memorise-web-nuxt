
class axios {
  init(axios, getFn) {
    this.axios = axios;
    this.getFn = getFn;
  }

  setToken(jwtToken) {
    this.jwtToken = jwtToken;
  }

  call(axiosFn, address, body, onSuccess, onError) {
    const headers = this.jwtToken ? { headers: { Authorization: 'Bearer ' + this.jwtToken } } : undefined;
    // console.warn('headers ---> ', headers);

    let isGet = false;
    if (axiosFn === this.getFn) {
      isGet = true;
    }
    return axiosFn(address, isGet ? headers : body, isGet ? undefined : headers)
      .then(function (response) {
        // console.warn('axios response --->', response);
        if (response.status === 200) {
          onSuccess && onSuccess(response.data);
        } else {
          onError && onError(response.statusText);
        }
      })
      .catch(function (err) {
        console.warn('axios error ===>', err);
        if ([400, 401].includes(err.status)) {
          // console.warn('Unauthorized');
        }
        onError && onError((err && err.response) || err || 'unknown network error');
      });
  };
}

const myAxios = new axios();
export default myAxios;
