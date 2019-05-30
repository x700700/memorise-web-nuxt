import Axios from '../global/myAxios';


export const state = () => ({
  duringFetch: false,
  editedTraining: null,
  playedTraining: null,
});

export const mutations = {
  requestTrans(state) {
    state.duringFetch = true;
  },
  setEditedTraining(state, editedTraining) {
    state.editedTraining = editedTraining;
    state.duringFetch = false;
  },
  setPlayedTraining(state, playedTraining) {
    state.playedTraining = playedTraining;
    state.duringFetch = false;
  },
  error(state) {
    state.duringFetch = false;
  },
};

export const actions = {
  loadEditedTraining({ commit }, { id }) {
    console.warn('loadEditedTraining action id = ', id);
    commit('requestTrans');
    Axios.call(this.$axios.get, `/api/trainings/${id}`, null,
      (resp) => {
        commit('setEditedTraining', resp);
      },
      (err) => {
        commit('error');
        commit('user/setError', err.data.message || err.data, { root: true });
      });
  },
};
