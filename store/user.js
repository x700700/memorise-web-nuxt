import axios from 'axios';

export const state = () => ({
  isLoggedIn: false,
});

export const mutations = {
  setIsLoggedIn(state, is) {
    state.isLoggedIn = is;
  }
};

export const actions = {
  login({ commit }, loginBody) {
    commit('setIsLoggedIn', false);
    axios
      .get('http://memorise.com:4044/auth/check', {
        headers: {
          'Accept': 'application/json',
        },
      })
      .then((r) => {
        console.warn('->', r);
        return r.data;
      })
      .then((res) => {
        console.warn('--->', res);
      })
      .catch((err) => {
        console.warn('===>', err);
      })
  }
};


/*
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
'Access-Control-Allow-Headers': 'Content-Type, Authorisation',
*/
