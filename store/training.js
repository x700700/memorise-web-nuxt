// import Axios from '../global/myAxios';

export const state = () => ({
  editedTraining: null,
  playedTraining: null,
});

export const mutations = {
  setPlayedTraining(state, playedTraining) {
    state.playedTraining = playedTraining;
  }
};

export const actions = {
  /*
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
  */
};
