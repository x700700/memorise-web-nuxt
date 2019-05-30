import Axios from '../global/myAxios';

export const state = () => ({
  duringFetch: false,
  dictionary: null,
});

export const mutations = {
  requestTrans(state) {
    state.duringFetch = true;
  },
  getSucceed(state, dict) {
    state.dictionary = dict;
    state.duringFetch = false;
  },
  getError(state) {
    state.duringFetch = false;
  },
};

export const actions = {
  loadTrainings({ commit }) {
    commit('requestTrans');
    Axios.call(this.$axios.get, '/api/trainings', null,
      (resp) => {
        commit('getSucceed', resp);
      },
      (err) => {
        commit('getError');
        commit('user/setError', err.data.message || err.data, { root: true });
      });
  },
};
