
// 导入组件，组件必须声明 name
import FollowMouse from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
FollowMouse.install = function (Vue) {
    Vue.component(FollowMouse.name, FollowMouse)
}

export default FollowMouse