export default {
    namespaced: true,
    state: {
        moduleStateValue: 'prestaStateValue'
    },
    mutations: {
        update(state) {
            state.moduleStateValue += ' updated'
        }
    },
    actions: {},
    modules: {},
};
