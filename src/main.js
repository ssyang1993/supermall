import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router";

Vue.config.productionTip = false

/*$bus本来是空的，要在这里定义一个*/
Vue.prototype.$bus = new Vue()

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
