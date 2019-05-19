
export const state = () => ({
  list: ['a', 'b'],
});

export const mutations = {
  set(state, arr) {
    state.list = arr;
    console.warn('mutation: ', arr);
  }
};
