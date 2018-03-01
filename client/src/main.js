// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import {store} from './store'
import router from './router'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'

// import Editable from './Editable.vue'


Vue.use(VeeValidate);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

window.Event = new Vue;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  components: { App },
  template: '<App/>'
})
