<template>
    <div>
        <number :width="width" :value="time0"></number>
        <span>&nbsp;</span>
        <number :width="width" :value="time1"></number>
        <div class="colon">
            <span></span>
            <span></span>
        </div>
        <number :width="width" :value="time2"></number>
        <span>&nbsp;</span>
        <number :width="width" :value="time3"></number>
        <div class="colon">
            <span></span>
            <span></span>
        </div>
        <number :width="width" :value="time4"></number>
        <span>&nbsp;</span>
        <number :width="width" :value="time5"></number>
    </div>
</template>

<script>
import $ from 'jquery'
import number from './number.vue'
export default {
    name: 'my-clock',
    components: {number},
    props: {
        height: {
            type: Number,
            default: 40
        }
    },
    data() {
        return {
            width: (this.height - 4) * 10 / 18,
            time0: Math.floor(parseInt((new Date()).getHours()) / 10),
            time1: parseInt((new Date()).getHours()) % 10,
            time2: Math.floor(parseInt((new Date()).getMinutes()) / 10),
            time3: parseInt((new Date()).getMinutes()) % 10,
            time4: Math.floor(parseInt((new Date()).getSeconds()) / 10),
            time5: parseInt((new Date()).getSeconds()) % 10
        }
    },
    mounted() {
        $('.colon').css({'height': this.height + 'px', 'width': this.width + 'px'})
        $('.colon span').css({'width': this.width / 4 + 'px', 'height': this.width / 4 + 'px'})
        setInterval(()=>{
            let date = new Date()
            this.time0 = Math.floor(parseInt(date.getHours()) / 10)
            this.time1 = parseInt(date.getHours()) % 10
            this.time2 = Math.floor(parseInt(date.getMinutes()) / 10)
            this.time3 = parseInt(date.getMinutes()) % 10
            this.time4 = Math.floor(parseInt(date.getSeconds()) / 10)
            this.time5 = parseInt(date.getSeconds()) % 10
        }, 1000)
    }
}
</script>

<style lang="scss" scoped>
.colon{
    position: relative;
    display: inline-block;
    span{
        position: absolute;
        left: 50%;
        width: 5px;
        height: 5px;
        background: black;
        &:nth-child(1){
            top: 30%;
            transform: translate(-50%, -50%);
        }
        &:nth-child(2){
            bottom: 30%;
            transform: translate(-50%, 50%);
        }
    }
}
</style>

