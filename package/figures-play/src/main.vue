<template>
    <div class="content">
        <ul>
            <transition v-for="image in images" :key="image.src" name="play">
                <li v-show="image.show">
                    <a :href="image.href">
                        <img :src="image.src"/>
                    </a>
                </li>
            </transition>
        </ul>
        <ol>
            <li v-for="(image, index) in images" 
                :key="index" 
                :ref = "'image' + index"
                :class="{isCurrent: image.show, unCurrent: !image.show}"
                @click="show(index)"></li>
        </ol>
    </div>
</template>

<script>

export default {
    name: 'figures-play',
    props: {
        images: Array,
        auto: {
            type: Boolean,
            default: true
        },
        delay: {
            type: Number,
            default: 2000
        }
    },
    data() {
        return {
            current: {},
            old: {},
            timer: null
        }
    },
    methods: {
        show(index) {
            clearInterval(this.timer)
            this.autoPlay()
            if (index !== this.current.index) {
                this.current = this.images[index]
                this.current.show = true
                this.old.show = false
                this.old = this.images[index]
            }
        },
        autoPlay() {
            if(this.auto === true) {
                this.timer = setInterval(()=> {
                    if(this.current.index === this.images.length - 1) {
                        this.show(0)
                    } else {
                        this.show(this.current.index + 1)
                    }
                }, this.delay)
            }
        }
    },
    created() {
        this.images.forEach((element, index) => {
            this.$set(element, 'show', false)
            this.$set(element, 'index', index)
        });
        this.images[0].show = true
        this.current = this.images[0]
        this.old = this.images[0]
    },
    mounted() {
        this.images.forEach((element, index) => {
            this.$refs['image' + index][0].style.top = '50%'
            this.$refs['image' + index][0].style.left = 20*index + 'px'
        });
        this.autoPlay()
    }
}
</script>

<style scoped>
.content{
    width: 100%;
    height: 300px;
    position: relative;
    top: 0;
    left: 0;
}
ul, ol, li{
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
}
ul{
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0;
    width: 100%;
    height: 100%;
}
ul li{
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
a, img{
    display: inline-block;
    width: 100%;
    height: 100%;
}
ol{
    position: absolute;
    height: 30px;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
    text-align: center;
}
ol li{
    display: inline-block;
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #ccc;
}
.isCurrent{
    width: 15px;
    height: 15px;
}
.unCurrent{
    width: 10px;
    height: 10px;
}
.play-enter-active, .play-leave-active {
  transition: opacity 1s;
}
.play-enter, .play-leave-to {
  opacity: 0;
}
</style>
