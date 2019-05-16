<template>
    <div id="panel">
        <header id="panel-header" @click="slide">
            <slot name="header"></slot>
        </header>
        <main id="panel-main"> 
            <slot></slot>
        </main>
    </div>
</template>

<script>
 import $ from 'jquery'
export default {
    name: 'my-panel',
    props: {
        canCollapse: {
            type: Boolean,
            default: true
        },
        collapse: {
            type: Boolean,
            default: false
        },
        headerBackgroundColor: {
            type: String,
            default: 'rgba(250, 250, 250, 0.8)'
        },
        bodyBackgroundColor: {
            type: String,
            default: 'rgba(250, 250, 250, 0.8)'
        },
        width: {
            type: String,
            default: '100%'
        },
        borderColor: {
            type: String,
            default: '#ccc'
        },
        borderRadius: {
            type: String,
            default: '0'
        }
    },
    methods: {
        slide() {
            if(this.canCollapse){
                $('main').slideToggle()
            }
        }
    },
    mounted() {
        if(this.canCollapse){
            if(this.collapse) {
                $('main').css('display', 'none')
            }
        }
        $('#panel').css({'width': this.width, 'border-radius': this.borderRadius})
        $('#panel-header').css({
            'background': this.headerBackgroundColor,
            'border-radius': this.borderRadius + ' ' + this.borderRadius + ' 0 0' ,
            'border-color': this.borderColor
        })
        $('#panel-main').css({
            'background': this.bodyBackgroundColor,
            'border-radius': '0 0 ' + this.borderRadius + ' ' + this.borderRadius,
            'border-color': this.borderColor
        })
    }
}
</script>

<style lang="scss" scoped>
$panelColor: #ccc;
#panel {
    #panel-header {
        color: rgba(40, 40, 40, 0.8);
        font-weight: 600;
        padding: 5px 10px;
        border: 1px solid $panelColor;
    }
    #panel-main{
        padding: 10px;
        border: 1px solid $panelColor;
        border-top: 0;
    }
}
</style>

