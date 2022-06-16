import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';

import '@/assets/sass/main.scss';
import 'bootstrap/scss/bootstrap.scss';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
