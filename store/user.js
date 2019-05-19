import { Axios, get, post } from '../global/myAxios';

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
  requestAuth(state) {
    setProps(state, null, true);
  },
  authSucceed(state, res) {
    setProps(state, res, false);
  },
  authError(state, err) {
    setProps(state, err, false);
  },
};

export const actions = {
  login({ commit }, loginBody) {
    console.warn('login action:', loginBody);
    commit('requestLogoin');
    Axios(post, 'http://memorise.com:4044/auth/login', loginBody,
      (resp) => {
        commit('loginSucceed', resp);
      },
      (err) => {
        const authCodes = [400, 401];
        if (authCodes.includes(err.status)) {
          console.warn('NOT Authorized');
        }
        commit('loginError', { errorMessage: err.data.message || err.data });
      });
  },
  auth({ commit }) {
    console.warn('auth check...');
    commit('requestAuth');
    Axios(get, 'http://memorise.com:4044/auth/check', null,
      (resp) => {
        commit('authSucceed', resp);
      },
      (err) => {
        const authCodes = [400, 401];
        if (authCodes.includes(err.status)) {
          console.warn('NOT Authorized');
        }
        commit('authError', { errorMessage: err.data.message || err.data });
      });
  }
};
