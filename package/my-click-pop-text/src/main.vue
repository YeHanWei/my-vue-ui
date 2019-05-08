<template>
    <div>
        <div class="pop-text" v-for="(text, index) in texts" :key="index" :ref="'text' + index">{{text}}</div>
    </div>    
</template>

<script>
export default {
    name: 'my-click-pop-text',
    props: {
        textArray: {
            type: Array,
            default: () => {
                return ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']
            }
        }
    },
    data() {
        return {
            texts: this.textArray,
            index: 0
        }
    },
    computed: {
        len() {
            return this.texts.length
        }
    },
    methods: {
        randomColor() {
            let R = Math.floor(Math.random()*255)
            let G = Math.floor(Math.random()*255)
            let B = Math.floor(Math.random()*255)
            return 'rgb(' + R + ',' + G + ',' + B + ')'
        },
        getDom(index) {
            return this.$refs['text' + (index % this.len)][0]
        },
        pop(index, event) {
            this.getDom(index).style.top = event.clientY + 'px'
            this.getDom(index).style.left = event.clientX + 'px'
            this.getDom(index).style.color = this.randomColor()
            this.getDom(index).style.display = 'inline-block'
            let opacity = 1.0
            clearInterval(this.getDom(index).timer)
            this.getDom(index).timer = setInterval(() => {
                this.getDom(index).style.top = parseInt(this.getDom(index).style.top) - 1 + 'px'
                opacity -= 0.01
                this.getDom(index).style.opacity = opacity
                if(opacity <= 0) {
                    this.getDom(index).style.display = 'none'
                    clearInterval(this.getDom(index).timer)
                }
            }, 20)
        }
    },
    created() {
        if (this.texts.length === 0) {
            this.texts = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']
        }
    },
    mounted() {
        document.onclick = (event) => {
            this.pop(this.index++, event)
        }
    }
}
</script>

<style>
.pop-text{
    font-size: 12px;
    font-weight: 600;
    display: none;
    position: fixed;
    transform: translate(-50%, -50%)
}
</style>
