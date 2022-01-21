import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMobile: !!navigator.userAgent.match(),
        user: {
            id: localStorage.getItem('userid') ? localStorage.getItem('userid') : null,
            displayName: localStorage.getItem('username') ? localStorage.getItem('username') : null,
            email: localStorage.getItem('email') ? localStorage.getItem('email') : null,
            authToken: localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null,
        }
    },
    mutations: {
        setUser(state, data) {
            state.user.id = data.userid
            state.user.displayName = data.username
            state.user.email = data.email
            state.user.authToken = data.authToken

            localStorage.setItem('userid',data.userid)
            localStorage.setItem('username', data.username)
            localStorage.setItem('email', data.email)
            localStorage.setItem('authToken', data.authToken)
            console.log(state.user.displayName, state.user.email, state.user.authToken)
        },
        removeUser(state) {
            state.user.id = null
            state.user.displayName = null
            state.user.email = null
            state.user.authToken = null
            localStorage.clear();
        }
    },
    actions: {},
    modules: {}
})
