
// 导入单个组件
import CenterContent from './my-center-content/index'
import FiguresPlay from './my-figures-play/index'
import FollowMouse from './my-follow-mouse/index'
import ClickPopText from './my-click-pop-text/index'
import Switch from './my-switch/index'
import NumberBox from './my-number-box-btn/index'
import Panel from './my-panel/index'
import Clock from './my-clock'

// 以数组的结构保存组件，便于遍历
const components = [
    CenterContent,
    ClickPopText,
    FiguresPlay,
    FollowMouse,
    NumberBox,
    Panel,
    Switch,
    Clock
]

// 定义 install 方法
const install = function (Vue) {
    if (install.installed) return
    install.installed = true
    // 遍历并注册全局组件
    components.map(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    CenterContent,
    ClickPopText,
    FiguresPlay,
    FollowMouse,
    NumberBox,
    Panel,
    Switch,
    Clock
}