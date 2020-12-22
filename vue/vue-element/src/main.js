import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import verify from 'mh-verify-code'


Vue.config.productionTip = false
Vue.use(verify)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
