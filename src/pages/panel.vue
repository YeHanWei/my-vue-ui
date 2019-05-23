<template>
    <my-panel :width="'50%'" 
        :headerBackgroundColor="'red'" 
        :bodyBackgroundColor="'blue'" 
        :borderRadius="'2px'"
        :collapse="true"
        :canCollapse="true">
        <template v-slot:header>
            <span>title</span>
        </template>
        <p>body</p>
    </my-panel>
</template>

<script>
export default {
    name: 'panel'
}
</script>

<style scoped>

</style>
