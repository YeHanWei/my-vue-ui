import Vue from 'vue'
import App from './App.vue'
import myVueUI from '../package/index'

Vue.config.productionTip = false
Vue.use(myVueUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
