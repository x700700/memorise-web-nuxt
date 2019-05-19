import axios from 'axios';

export const state = () => ({
  duringFetch: false,
  isLoggedIn: false,
  nickName: null,
  info: null,
  error: null,
});

const setProps = (state, res, fetch) => {
  state.isLoggedIn = (res && res.nickName) || false;
  state.nickName = (res && res.nickName) || null;
  state.info = (res && res.info) || null;
  state.duringFetch = fetch;
  state.error = (res && res.errorMessage) || null;
};

export const mutations = {
  requestLogoin(state) {
    setProps(state, null, true);
  },
  loginSucceed(state, res) {
    setProps(state, res, false);
  },
  loginError(state, err) {
    setProps(state, err, false);
  },
};

export const actions = {
  login({ commit }, loginBody) {
    console.warn('login action:', loginBody);
    commit('requestLogoin');
    axios
      .post('http://memorise.com:4044/auth/login', loginBody, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          console.warn('axios response:', response.data);
          commit('loginSucceed', response.data);
        } else {
          console.warn('Something went wrong:', response);
          commit('loginError', { errorMessage: response.statusText });
        }
      })
      .catch(function (err) {
        console.warn('error ====>', err.response);
        const authCodes = [400, 401];
        if (authCodes.includes(err.response.status)) {
          console.warn('NOT Authorized');
        }
        commit('loginError', { errorMessage: err.response.data.message || err.response.data });
      });
  }
};
