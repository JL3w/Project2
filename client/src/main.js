import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import AuthPlugin from "./plugins/auth";


Vue.use(Vuetify)
Vue.use(AuthPlugin);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
