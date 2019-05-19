// import axios from '@nuxtjs/axios';

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
    console.warn(loginBody);
    commit('setIsLoggedIn', true);
  }
  /*
  loadCoins() {
    axios
      .get('localhost:4044/auth/check')
      .then(r => r.data)
      .then((res) => {
        console.log(res)
      })
  },
  */
};
