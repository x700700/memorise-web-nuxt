
class axios {
  init(axios, getFn) {
    this.axios = axios;
    this.getFn = getFn;
  }

  setToken(token) {
    this.token = token;
  }

  call(axiosFn, address, body, onSuccess, onError) {
    const headers = this.token ? { headers: { Authorization: 'Bearer ' + this.token } } : undefined;
    // console.warn('headers ---> ', headers);

    let isGet = false;
    if (axiosFn === this.getFn) {
      isGet = true;
    }
    return axiosFn(address, isGet ? headers : body, isGet ? undefined : headers)
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
}

const myAxios = new axios();
export default myAxios;
