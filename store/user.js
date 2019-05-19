export const state = () => ({
  isLoggedIn: false,
});

export const mutations = {
  login(state, loginBody) {
    state.isLoggedIn = true;
    console.warn('mutation: ', loginBody);
  }
};
