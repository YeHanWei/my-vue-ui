<template>
  <div id="app">
    <router-view/>
    <my-follow-mouse :amount="10" :sizeInterval="1" :timeInterval="40" :minSize="10"></my-follow-mouse>
    <my-click-pop-text :textArray="textArray"></my-click-pop-text>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      textArray: ['hello', 'hi', 'good', 'nice', 'beautiful'],
      value: true
    }
  },
  watch: {
    value: function(newVal, oldVal) {
      console.log(oldVal + ' to ' + newVal)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
