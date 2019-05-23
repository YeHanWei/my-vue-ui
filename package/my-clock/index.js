import Clock from './src/main.vue'

Clock.install = function(Vue) {
    Vue.component(Clock.name, Clock)
}

export default Clock