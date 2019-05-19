
/*
const myPlugin = (store) => {
  store.subscribe((mutation, state) => {
    console.warn('-->')
  })
};
export const plugins = [myPlugin];
*/

export const state = () => ({
  isLoggedIn: false,
});

export const mutations = {
  login(state, loginBody) {
    state.isLoggedIn = true;
    // console.warn('mutation: ', loginBody);
  }
};
