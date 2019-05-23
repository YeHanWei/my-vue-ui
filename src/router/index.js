import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import CenterContent from '../pages/center-content.vue'
import FiguresPlay from '../pages/figures-play.vue'
import Switch from '../pages/iswitch.vue'
import NumberBoxBtn from '../pages/number-box-btn.vue'
import Panel from '../pages/panel.vue'
import Clock from '../pages/clock.vue'

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
        path: '/iswitch',
        name: 'iswitch',
        component: Switch
      },
      {
        path: '/number-box-btn',
        name: 'number-box-btn',
        component: NumberBoxBtn
      },
      {
        path: '/panel',
        name: 'panel',
        component: Panel
      },
      {
        path: '/clock',
        name: 'clock',
        component: Clock
      }
    ]
})