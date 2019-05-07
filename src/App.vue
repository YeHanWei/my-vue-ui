<template>
  <div id="app">
    <figures-play :images="images" :auto="false" id="play"></figures-play>
    <follow-mouse :amount="10" :sizeInterval="1" :timeInterval="40" :minSize="10"></follow-mouse>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      images: [
        {src: "http://img1.3lian.com/2015/a1/82/d/193.jpg", href: "http://www.baidu.com"},
        {src: "http://img1.3lian.com/2015/a1/80/d/225.jpg"}
        ]
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
#play{
  width: 500px;
  height: 500px;
}
</style>
