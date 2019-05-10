<template>
    <div>
        <my-switch :activeColor="'red'" :inactiveColor="'green'" v-model="value"></my-switch>
        <p>当前switch值为：{{value}}</p>
    </div>
</template>

<script>
export default {
    name: 'iswitch',
    data() {
        return {
            value: false
        }
    }
}
</script>

<style scoped>

</style>
