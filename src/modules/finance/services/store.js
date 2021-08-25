import Vue from 'vue'

const initFinanceState = (state, stateKey, stateValues) => {
    console.log(stateKey, stateValues)
    Object.keys(stateValues).forEach(key => {
        Vue.set(state[stateKey], key, stateValues[key])
    })
}
const updateFinanceState = (state, stateKey, { key, value }) => {
    console.log(stateKey, state, { key, value })
    Vue.set(state[stateKey], key, value === null || value === '' ? 0 : value)
}

export default {
    namespaced: true,
    state: {
        bilan: {},
        compte: {}
    },
    mutations: {
        initBilan: (state, bilan) => initFinanceState(state, 'bilan', bilan),
        updateBilan: (state, { key, value }) => updateFinanceState(state, 'bilan', { key, value }),

        initCompte: (state, compte) => initFinanceState(state, 'compte', compte),
        updateCompte: (state, { key, value }) => updateFinanceState(state, 'compte', { key, value })
    },
    actions: {},
    modules: {},
};
