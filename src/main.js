import Vue from 'vue'
import App from './App.vue'
import router from './router'
import offersStore from './store';


Vue.config.productionTip = false

new Vue({
  router,
  store: offersStore(),
  render: h => h(App)
}).$mount('#app')

