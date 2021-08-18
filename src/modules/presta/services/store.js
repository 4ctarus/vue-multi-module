import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state: {
        moduleStateValue: 'prestaStateValue'
    },
    getters: {
        globalStateValue(state, getters, rootState) {
            console.log(rootState)
            return rootState.globalStateValue
        }
    },
    mutations: {},
    actions: {},
    modules: {},
});
