import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import CenterContent from '../pages/center-content.vue'
import FiguresPlay from '../pages/figures-play.vue'
import Switch from '../pages/switch.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/center-content',
        name: 'center-content',
        component: CenterContent
      },
      {
        path: '/figures-play',
        name: 'figures-play',
        component: FiguresPlay
      },
      {
        path: '/switch',
        name: 'switch',
        component: Switch
      },
    ]
})