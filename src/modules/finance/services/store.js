import Vue from 'vue'

const initFinanceState = (stateKey, state, value) => {
    Object.keys(value).forEach(key => {
        Vue.set(state[stateKey], key, value[key])
    })
}
const updateFinanceState = (stateKey, state, { key, value }) => {
    Vue.set(state[stateKey], key, value)
}

export default {
    namespaced: true,
    state: {
        bilan: {},
        compte: {}
    },
    mutations: {
        initBilan: (state, bilan) => initFinanceState('bilan', state, bilan),
        updateBilan: (state, { key, value }) => updateFinanceState('bilan', state, { key, value })
    },
    actions: {},
    modules: {},
};
