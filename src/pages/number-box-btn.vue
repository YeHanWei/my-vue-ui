<template>
    <div>
        <my-number-box-btn v-model="value" :minValue="0" :maxValue="10" :interval="3"></my-number-box-btn>
        <p>当前值为：{{value}}</p>
    </div>
</template>

<script>
export default {
    name: 'number-box-btn',
    data() {
        return {
            value: 0
        }
    }    
}
</script>

<style scoped>

</style>
