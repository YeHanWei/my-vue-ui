<template>
    <div class="number-box-btn">
        <div class="sub-btn" @click="sub"><my-center-content>-</my-center-content></div>
        <div class="number-box"><my-center-content>{{val}}</my-center-content></div>
        <div class="add-btn" @click="add"><my-center-content>+</my-center-content></div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'my-number-box-btn',
    props: {
        value: {
            type: Number,
            default: 0
        },
        maxValue: {
            type: Number,
            default: 100
        },
        minValue: {
            type: Number,
            default: 0
        },
        interval: {
            type: Number,
            default: 1
        },
        width: {
            type: Number,
            default: 100
        }
    },
    model: {
        prop: 'value',
        event: 'getValue'
    },
    data() {
        return {
            val: this.value
        }
    },
    methods: {
        add() {
            if(this.val < this.maxValue){
                this.val += this.interval
                if(this.val > this.maxValue){
                    this.val = this.maxValue
                }
                this.$emit('getValue', this.val)    
            }
        },
        sub() {
            if(this.val > this.minValue){
                this.val -= this.interval
                if(this.val < this.minValue){
                    this.val = this.minValue
                }
                this.$emit('getValue', this.val)
            }
        }
    },
    mounted() {
        $('.number-box-btn').css({
            'width': this.width + 'px', 
            'height': this.width / 4 + 'px',
            'fontSize': this.width * 3 / 16 + 'px'
        })
        $('.number-box').css({
            'width': this.width / 2 + 'px', 
            'height': this.width / 4 + 'px',
            'left': this.width / 4 + 'px'
        })
        $('.add-btn, .sub-btn').css({'width': this.width / 4 + 'px', 'height': this.width / 4 + 'px'})
        $('.sub-btn').css('left', '0')
        $('.add-btn').css('right', '0')

    }
}
</script>

<style scoped>
.number-box-btn{
    text-align: center;
    position: relative;
    overflow: hidden;

}
.number-box {
    display: inline-block;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    background: #fcfcfc;
    border-top: 1px solid #CCC;
    border-bottom: 1px solid #CCC;
    overflow: hidden;
}
.sub-btn, .add-btn {
    display: inline-block;
    padding: 0;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    background: #f9f9f9;
    border: 1px solid #CCC; 
    overflow: hidden;
}
.sub-btn:hover, .add-btn:hover{
    cursor: pointer;
    background: #EEE;
}
.sub-btn:active, .add-btn:active{
    background: #CCC;
    cursor: pointer;
}
</style>
