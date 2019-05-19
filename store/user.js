import axios from 'axios';

export const state = () => ({
  duringFetch: false,
  isLoggedIn: false,
  nickName: null,
  info: null,
});

export const mutations = {
  requestLogoin(state) {
    state.isLoggedIn = false;
    state.nickName = null;
    state.info = null;
    state.duringFetch = true;
  },
  loginSucceed(state, res) {
    state.isLoggedIn = true;
    state.nickName = res.nickName;
    state.info = res.info;
    state.duringFetch = false;
  },
  loginError(state, err) {
    console.warn('blas');
    state.isLoggedIn = false;
    state.nickName = null;
    state.info = null;
    state.duringFetch = false;
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
        }
      })
      .catch(function (err) {
        console.warn('error ====>', err.response);
        const authCodes = [400, 401];
        if (authCodes.includes(err.response.status)) {
          console.warn('NOT Authorized');
        }
        commit('loginSucceed', err.response);
      });
  }
};
