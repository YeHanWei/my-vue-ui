import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import myVueUI from '../package/index'

Vue.config.productionTip = false
Vue.use(myVueUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
