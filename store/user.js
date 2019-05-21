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

export const mutations = {
  requestTrans(state) {
    setProps(state, null, true);
  },
  loginSucceed(state, res) {
    setProps(state, res.user, false);
    this.jwtToken = res.token;
    // Todo - set jwt into local storage
    Axios.setToken(this.jwtToken);
  },
  loginError(state, err) {
    setProps(state, err, false);
    // Todo - clear
  },
  authSucceed(state, res) {
    setProps(state, res.user, false);
    state.authChecked = true;
  },
  authError(state, err) {
    setProps(state, err, false);
    state.authChecked = true;
  },
  logoutSucceed(state) {
    setProps(state, null, false);
    this.jwtToken = null;
    // Todo - clear
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
        const authCodes = [400, 401];
        if (authCodes.includes(err.status)) {
          console.warn('NOT Authorized');
        }
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
      (err) => {
        const authCodes = [400, 401];
        if (authCodes.includes(err.status)) {
          console.warn('NOT Authorized');
        }
        commit('authError'); // , { errorMessage: err.data.message || err.data });
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
