import CenterContent from './src/main.vue'

CenterContent.install = function (Vue) {
    Vue.component(CenterContent.name, CenterContent)
}

export default CenterContent