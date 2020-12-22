import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// Vue.use(plugin) 的一个原则是use对象必须具备install方法
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
