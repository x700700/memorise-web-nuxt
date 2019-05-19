export const state = () => ({
  counter: 0
});

export const mutations = {
  increment(state) {
    state.counter++
  }
};

// import Vue from 'vue'
// import Vuex from 'vuex'
// import createLogger from 'vuex/dist/logger'
//
//
// import user from './modules/user';
// // import trainings from './modules/trainings';
//
//
// Vue.use(Vuex);
// const debug = process.env.NODE_ENV !== 'production';
//
// export default new Vuex.Store({
//   modules: {
//     user,
//     // trainings,
//   },
//   strict: debug,
//   plugins: debug ? [createLogger()] : [],
// });
