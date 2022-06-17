import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import VeeValidate from 'vee-validate';
import Toasted from 'vue-toasted';
import store from './store';

import '@/assets/sass/main.scss';
import 'bootstrap/scss/bootstrap.scss';

Vue.config.productionTip = false;
Vue.use(VeeValidate, { fieldsBagName: 'veeFields', locale: 'ptBr' });
Vue.use(VueRouter);
Vue.use(Toasted);

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
