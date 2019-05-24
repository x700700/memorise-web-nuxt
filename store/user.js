import { setData } from 'nuxt-storage/local-storage';
import Axios from '../global/myAxios';

export const state = () => ({
  duringFetch: false,
  isLoggedIn: false,
  nickName: null,
  info: null,
  error: null,
  authChecked: false,
  jwtToken: null,
});

const setProps = (state, res, fetch) => {
  state.isLoggedIn = (res && res.nickName) || false;
  state.nickName = (res && res.nickName) || null;
  state.info = (res && res.info) || null;
  state.duringFetch = fetch;
  state.error = (res && res.errorMessage) || null;
};

const resetJwtToken = (store) => {
  store.jwtToken = null;
  setData('jwtToken', null);
  Axios.setToken(null);
};

export const mutations = {
  requestTrans(state) {
    setProps(state, null, true);
  },
  loginSucceed(state, res) {
    setProps(state, res.user, false);
    this.jwtToken = res.token;
    Axios.setToken(this.jwtToken);
    setData('jwtToken', this.jwtToken, 24 * 60 * 60);
  },
  loginError(state, err) {
    setProps(state, err, false);
    resetJwtToken(this);
  },
  authSucceed(state, res) {
    setProps(state, res, false);
    state.authChecked = true;
  },
  authError(state, err) {
    setProps(state, err, false);
    state.authChecked = true;
  },
  logoutSucceed(state) {
    setProps(state, null, false);
    resetJwtToken(this);
  },
};

export const actions = {
  login({ commit }, loginBody) {
    console.warn('login action:', loginBody);
    commit('requestTrans');
    Axios.call(this.$axios.post, '/api/auth/login', loginBody,
      (resp) => {
        commit('loginSucceed', resp);
      },
      (err) => {
        commit('loginError', { errorMessage: err.data.message || err.data });
      });
  },
  auth({ commit }) {
    console.warn('auth check...');
    commit('requestTrans');
    Axios.call(this.$axios.get, '/api/auth/check', null,
      (resp) => {
        commit('authSucceed', resp);
      },
      () => {
        commit('authError');
      });
  },
  loginGoogle({ commit }, idToken) {
    console.warn('login Google...');
    commit('requestTrans');

    // Axios.call(this.$axios.get, `/api/auth/google?access_token=${idToken}`, null,
    // Todo - Send token properly to passport-google-token but doesn't work with passport-google-oauth2
    Axios.call(this.$axios.post, '/api/auth/google', { access_token: idToken },
      (resp) => {
        commit('loginSucceed', resp);
      },
      (err) => {
        commit('authError', { errorMessage: err.data.message || err.data });
      });
  },
  logout({ commit }) {
    console.warn('logout action:');
    commit('requestTrans');
    Axios.call(this.$axios.get, '/api/auth/logout', null,
      (resp) => {
        commit('logoutSucceed');
      },
      (err) => {
        commit('loginError', { errorMessage: err.data.message || err.data });
      });
  },
};
