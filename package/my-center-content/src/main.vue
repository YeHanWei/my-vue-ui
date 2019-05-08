<template>
    <div class="content" ref="content">
        <div class="center"><slot>居中内容</slot></div>
    </div>
</template>

<script>
export default {
    name: 'my-center-content',
    props: {
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '100%'
        }
    },
    mounted() {
        this.$refs.content.style.width = this.width
        this.$refs.content.style.height = this.height
    }
}
</script>

<style>
.center, .content{
    margin: 0;
    padding: 0;
    border: 0;
}
.content{
    box-sizing: border-box;
    position: relative;
    left: 0;
    top: 0;
    overflow: auto;
}
.center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
</style>

