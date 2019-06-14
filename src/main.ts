import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'mint-ui/lib/style.css';
import VueResource from 'vue-resource';
import VueCookies from 'vue-cookies';
import Cookies from 'js-cookie';
Vue.use(VueCookies);
Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // console.log(_this);
    // console.log(Cookies.get('name'));
    if (Cookies.get('name')) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath},
      });
    }
  } else {
    next();
  }
});
