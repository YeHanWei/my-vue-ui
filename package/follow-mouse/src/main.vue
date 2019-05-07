<template>
    <div class="content" :style="{'z-index': zIndex}">
        <div v-for="i in amount" :key="i" ref="point"></div>
    </div>
</template>

<script>
export default {
    name: 'follow-mouse',
    props: {
        amount: {
            type: Number,
            default: 5
        },
        color: {
            type: Array,
            default: () => { return [] }
        },
        zIndex: {
            type: Number,
            default: -10
        },
        minSize: {
            type: Number,
            default: 10
        },
        sizeInterval: {
            type: Number,
            default: 1
        },
        timeInterval: {
            type: Number,
            default: 50
        }
    },
    methods: {
        randomColor() {
            let R = Math.floor(Math.random()*255)
            let G = Math.floor(Math.random()*255)
            let B = Math.floor(Math.random()*255)
            return 'rgba(' + R + ',' + G + ',' + B + ',0.5)'
        }
    },
    mounted() {
        // 设置颜色
        if(this.color.length === 0) {
            for(let i = 0; i < this.amount; i++) {
                this.$refs['point'][i].style.background = this.randomColor()
            }
        } else if(this.color.length > 0 && this.color.length < this.amount) {
            for(let i = 0; i < this.color.length; i++) {
                this.$refs['point'][i].style.background = this.color[i]
            }
            for(let i = this.color.length; i < this.amount; i++) {
                this.$refs['point'][i].style.background = this.randomColor()
            }
        } else {
            for(let i = 0; i < this.amount; i++) {
                this.$refs['point'][i].style.background = this.color[i]
            }
        }
        // 设置尺寸
         for(let i = 0; i < this.amount; i++) {
            this.$refs['point'][i].style.height 
            = this.$refs['point'][i].style.width 
            = this.minSize + this.sizeInterval * (this.amount - 1 - i) + 'px'
        }
        // 绑定跟随事件
        document.onmousemove = (evt) => {
            let oEvent = evt || window.event
            for(let i = 0; i < this.amount; i++) {
                let scrollleft = document.documentElement.clientLeft || document.body.clientLeft
                let scrolltop = document.documentElement.clientTop || document.body.clientTop
                setTimeout(() => {
                    this.$refs['point'][i].style.left = oEvent.clientX + scrollleft + 'px'
                    this.$refs['point'][i].style.top = oEvent.clientY + scrolltop + 'px'
                }, i * this.timeInterval)
            }
        }
    }
}
</script>

<style scoped>
.content div{
    display: inline-block;
    border: 0;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    z-index: -10;
}
</style>


