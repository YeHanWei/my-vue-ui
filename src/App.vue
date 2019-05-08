<template>
  <div id="app">
    <my-figures-play :images="images" :auto="false"></my-figures-play>
    <my-follow-mouse :amount="10" :sizeInterval="1" :timeInterval="40" :minSize="10"></my-follow-mouse>
    <div style="height: 400px; width: 400px;">
      <my-center-content style="background:red;">
        垂直居中内容，包含文本和HTML
      </my-center-content>
    </div>
    <my-click-pop-text :textArray="textArray"></my-click-pop-text>
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
      ],
      textArray: ['hello', 'hi', 'good', 'nice', 'beautiful']
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
