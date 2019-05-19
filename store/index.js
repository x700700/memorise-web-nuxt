import createLogger from 'vuex/dist/logger'
const myPlugins = [];
const debug = process.env.NODE_ENV !== 'production';
if (debug) myPlugins.push(createLogger);
export const plugins = [...myPlugins];


export const state = () => ({
  // counter: 0
});

export const mutations = {
  /*
  increment(state) {
    state.counter++
  }
 */
};
