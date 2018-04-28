import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    count: 1
}

const mutations = {
    add(state, n) {
        state.count += n;
    },
    reduce(state) {
        state.count--;
    }
}
const getters = {
    count: function (state) {
        return state.count += 100;
    }
}

const actions = {
    addAction(context) {//写法一
        // console.log('context')
        // console.log(context)
        // console.log(context.commit)
        context.commit('add', 10)
        setTimeout(() => { context.commit('reduce') }, 3000);
        console.log('我比reduce先执行的')
    },
    reduceAction({ commit }) {//写法二
        console.log('commit')
        // console.log(commit)
        commit('reduce')
    }
}
const moduleA = {//模块组
    state, mutations, getters, actions
}
/* export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
}) */
export default new Vuex.Store({//模块组
    modules: { a: moduleA }
})