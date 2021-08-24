import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        bilan: {},
        compte: {}
    },
    mutations: {
        initBilan(state, bilan) {
            Object.keys(bilan).forEach(key => {
                Vue.set(state.bilan, key, bilan[key])
            })
        },
        updateBilan(state, { key, value }) {
            Vue.set(state.bilan, key, value)
        }
    },
    actions: {},
    modules: {},
};
