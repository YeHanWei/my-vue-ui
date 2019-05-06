import Vue from 'vue'

// 导入组件
import FiguresPlay from './figures-play'
import FollowMouse from './follow-mouse'

const Components = {
    FiguresPlay,
    FollowMouse
}

// 自动注册组件
Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components