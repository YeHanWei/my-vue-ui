<template>
    <div class="switch" @click="change">
        <span class="active"></span>
        <span class="inactive"></span>
        <span class="switch-btn"></span>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'my-switch',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        width: {
            type: Number,
            default: 50
        },
        activeColor: {
            type: String,
            default: 'red'
        },
        inactiveColor: {
            type: String,
            default: '#CCC'
        },
    },
    model: {
        prop: 'value',
        event: 'switchchange'
    },
    data() {
        return {
            val: this.value,
            sportTime: 300,
            delay: 30
        }
    },
    methods: {
        change() {
            if ($('.switch-btn').css('right') === '2px') {
                this.val = false
                this.$emit('switchchange', false)
                $('.switch-btn').animate({'right': this.width/2 + 2 + 'px', 'left': '2px'}, this.sportTime)
                $('.active, .inactive').fadeToggle(this.sportTime)
            } else if ($('.switch-btn').css('left') === '2px') {
                this.val = true
                this.$emit('switchchange', true)
                $('.switch-btn').animate({'left': this.width/2 + 2 + 'px', 'right': '2px'}, this.sportTime)
                $('.active, .inactive').fadeToggle(this.sportTime)
            }
        }
    },
    mounted() {
        $('.switch, .active, .inactive').css({
            'width': this.width + 'px', 
            'height': this.width/2 + 'px',
            'border-radius': this.width/2 + 'px'
        })
        $('.switch-btn').css({
            'width': this.width/2 + 'px', 
            'height': this.width/2 + 'px',
            'border-radius': this.width/2 + 'px'
        })
        $('.active').css({'backgroundColor': this.activeColor})
        $('.inactive').css({'backgroundColor': this.inactiveColor})
        if(this.value === true) {
            $('.switch-btn').css({'left': this.width/2 + 2 + 'px', 'right': '2px'})
            $('.active').show()
            $('.inactive').hide()
        } else {
            $('.switch-btn').css({'right': this.width/2 + 2 + 'px', 'left': '2px'})
            $('.active').hide()
            $('.inactive').show()
        }
    }
}
</script>

<style scoped>
.switch{
    padding: 2px;
    display: inline-block;
    position: relative;
}
.switch-btn{
    border-radius: 50%;
    background: white;
    display: inline-block;
    position: absolute;
}
.active, .inactive{
    padding: 2px;
    position: absolute;
    display: inline-block;
    left: 0;
    top: 0;
}
</style>
