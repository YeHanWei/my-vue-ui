<template>
    <div class="num">
        <div class="a" :class="{active: active[0], inactive: !active[0]}">
            <div class="aLeft"></div>
            <div class="aRight"></div>
        </div>
        <div class="b" :class="{active: active[1], inactive: !active[1]}">
            <div class="bTop"></div>
            <div class="bBottom"></div>
        </div>
        <div class="c" :class="{active: active[2], inactive: !active[2]}">
            <div class="cLeft"></div>
            <div class="cRight"></div>
        </div>
        <div class="d" :class="{active: active[3], inactive: !active[3]}">
            <div class="dLeft"></div>
            <div class="dRight"></div>
        </div>
        <div class="e" :class="{active: active[4], inactive: !active[4]}">
            <div class="eTop"></div>
            <div class="eBottom"></div>
        </div>
        <div class="f" :class="{active: active[5], inactive: !active[5]}">
            <div class="fLeft"></div>
            <div class="fRight"></div>
        </div>
        <div class="g" :class="{active: active[6], inactive: !active[6]}">
            <div class="gTop"></div>
            <div class="gBottom"></div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'number',
    props: {
        width: {
            type: Number,
            default: 20
        },
        value: {
            type: Number,
            default: 2
        }
    },
    data() {
        return {
            active: [1, 1, 1, 1, 1, 1, 1]
        }
    },
    watch: {
        value: function() {
            this.setValue();
        }
    },
    methods: {
        setValue() {
            switch(this.value) {
                case 0: 
                    this.active = [1, 1, 1, 1, 1, 1, 0]; 
                    break;
                case 1:
                    this.active = [0, 0, 1, 1, 0, 0, 0];
                    break;
                case 2: 
                    this.active = [0, 1, 1, 0, 1, 1, 1];
                    break;
                case 3:
                    this.active = [0, 1, 1, 1, 1, 0, 1];
                    break;
                case 4:
                    this.active = [1, 0, 1, 1, 0, 0, 1];
                    break;
                case 5: 
                    this.active = [1, 1, 0, 1, 1, 0, 1];
                    break;
                case 6: 
                    this.active = [1, 1, 0, 1, 1, 1, 1];
                    break;
                case 7: 
                    this.active = [0, 1, 1, 1, 0, 0, 0]; 
                    break;
                case 8: 
                    this.active = [1, 1, 1, 1, 1, 1, 1]; 
                    break;
                case 9: 
                    this.active = [1, 1, 1, 1, 1, 0, 1]; 
                    break;
                default:
                    this.active = [0, 1, 1, 1, 1, 0, 0]; 
                    break;
            }
        }
    },
    mounted() {
        let borderWidth = this.width / 10
        // 设置尺寸
        $('.num').css({'width': this.width + 2 + 'px', 'height': 18 * borderWidth + 4 + 'px'})
        $('.a, .c, .d, .f').css({'width': 2 * borderWidth + 'px', 'height': 8 * borderWidth + 'px'})
        $('.b, .e, .g').css({'width': 8 * borderWidth + 'px', 'height': 2 * borderWidth + 'px'})
        $('.aLeft, .aRight, .cLeft, .cRight, .dLeft, .dRight, .fLeft, .fRight').css({'height': 8 * borderWidth + 'px'})
        $('.bTop, .bBottom, .eTop, .eBottom, .gTop, .gBottom').css({'width': 8 * borderWidth + 'px'})
        // 设置定位
        $('.a').css({'top': borderWidth + 1 + 'px', 'left': '0'})
        $('.b').css({'top': '0', 'left': borderWidth + 1 + 'px'})
        $('.c').css({'top': borderWidth + 1 + 'px', 'right': '0'})
        $('.d').css({'bottom': borderWidth + 1 +'px', 'right': '0'})
        $('.e').css({'bottom': '0', 'left': borderWidth + 1 + 'px'})
        $('.f').css({'bottom': borderWidth + 1 + 'px', 'left': '0'})
        $('.g').css({'top':  8 * borderWidth + 2 + 'px', 'left': borderWidth + 1 + 'px'})
        // 设置边框
        $('.aLeft, .cLeft, .dLeft, .fLeft').css({
            'border': borderWidth + 'px solid black',
            'border-left': '0',
            'border-top-color': 'transparent',
            'border-bottom-color': 'transparent'
        })
        $('.aRight, .cRight, .dRight, .fRight').css({
            'border': borderWidth + 'px solid black',
            'border-right': '0',
            'border-top-color': 'transparent',
            'border-bottom-color': 'transparent'
        })
        $('.bTop, .eTop, .gTop').css({
            'border': borderWidth + 'px solid black',
            'border-top': '0',
            'border-left-color': 'transparent',
            'border-right-color': 'transparent'
        })
        $('.bBottom, .eBottom, .gBottom').css({
            'border': borderWidth + 'px solid black',
            'border-bottom': '0',
            'border-left-color': 'transparent',
            'border-right-color': 'transparent'
        })
        this.setValue();
    }
}
</script>

<style lang="scss" scoped>
div{
    margin: 0;
    padding: 0;
    display: inline-block;
}
.num{
    position: relative;
}
.a,.b,.c,.d,.e,.f,.g{
    position: absolute;
    div{
        position: absolute;
        box-sizing: border-box;
    }
}
.aLeft, .cLeft, .dLeft, .fLeft{
    left: 0;
}
.aRight, .cRight, .dRight, .fRight{
    right: 0;
}
.bTop, .eTop, .gTop{
    top: 0;
}
.bBottom, .eBottom, .gBottom{
    bottom: 0;
}
.active{
    opacity: 1;
}
.inactive{
    opacity: 0;
}
</style>

