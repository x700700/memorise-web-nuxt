import { setData } from 'nuxt-storage/local-storage';
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
    setData('editedTraining', state.editedTraining, 7 * 24 * 60 * 60);
  },
  setPlayedTraining(state, playedTraining) {
    state.playedTraining = playedTraining;
    state.duringFetch = false;
    setData('playedTraining', state.playedTraining, 7 * 24 * 60 * 60);
  },
  errorLoadingEditedTraining(state, editedTraining) {
    state.editedTraining = null;
    state.duringFetch = false;
    setData('editedTraining', null);
  },
  errorLoadingPlayedTraining(state, playedTraining) {
    state.playedTraining = null;
    state.duringFetch = false;
    setData('playedTraining', null);
  },
};

export const actions = {
  loadTraining({ commit }, { id, edited, played }) {
    console.warn('loadTraining action id = ', id);
    commit('requestTrans');
    Axios.call(this.$axios.get, `/api/trainings/${id}`, null,
      (resp) => {

        edited && commit('setEditedTraining', resp);
        played && commit('setPlayedTraining', resp);
      },
      (err) => {
        edited && commit('errorLoadingEditedTraining');
        played && commit('errorLoadingPlayedTraining');
        commit('user/setError', err.data.message || err.data, { root: true });
      });
  },
};
