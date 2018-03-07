// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import {store} from './store'
import router from './router'
import VueAxios from 'vue-axios'
import VueCkeditor from 'vueckeditor'
import VeeValidate from 'vee-validate'

import { Button, Select, Loading } from 'element-ui';

// import Element from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

import Element from 'element-ui';
Vue.use(Element, { size: 'small' });

// import {Button,Select} from 'element-ui';

Vue.use(Button);
Vue.use(Select);


Vue.use(VeeValidate);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

window.Event = new Vue;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store: store,
	router,
	components: {
		App,
		VueCkeditor
	},
	template: '<App/>'
})