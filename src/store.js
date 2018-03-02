import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		profile: {
			id: localStorage.getItem("id"),
			username: localStorage.getItem("username"),
			fullname: localStorage.getItem("fullname"),
			email: localStorage.getItem("email"),
			token: localStorage.getItem("token")
		}
	}
});