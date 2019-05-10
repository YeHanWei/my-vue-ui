<template>
    <div>
        <my-figures-play :images="images" :auto="true"></my-figures-play>
    </div>
</template>

<script>
export default {
    name: 'figures-play',
    data() {
        return {
            images: [
                {src: "http://img1.3lian.com/2015/a1/82/d/193.jpg", href: "http://www.baidu.com"},
                {src: "http://img1.3lian.com/2015/a1/80/d/225.jpg"}
            ],
        }
    }
}
</script>

<style scoped>

</style>
