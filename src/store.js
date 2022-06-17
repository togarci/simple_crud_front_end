import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
        formUserData: {
			id: null,
            name: null,
            job: null
        }
	},
	getters: {
	},
	mutations: {
		setFormUserData(state, payload) {
            state.formUserData[payload.key] = payload.value;
        }
	},
	actions: {
	},
	modules: {
	}
})