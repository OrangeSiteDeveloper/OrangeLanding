import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shadowStep: 1,
    shdowIconClass: "show_circle",
    step2: false
  },
  mutations: {
    editshadowStep(state, payload) {
      state.shadowShow = payload;
    },
    editshdowIconClass(state, payload) {
      state.shdowIconClass = payload;
    },
    editstep2(state, payload) {
      state.step2 = payload;
    },
  },
  actions: {},
  modules: {},
});
