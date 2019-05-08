## 轮播图组件（my-figures-play）
### 功能
自动播放，手动选择，点击图片可访问预设链接。
### 在模版中使用
```
<template>
    <my-figures-play :images="images"></my-figures-play>
</tempalte>
```
组件内部使用的是类选择器，要覆盖组件默认样式，请使用优先级比类选择器更高的CSS选择器，如id选择器，或使用内联样式。
```
<template>
    <my-figures-play :images="images" style="width: 500px;"></my-figures-play>
</template>
```
### props属性
|名称|类型|说明|默认值|
|-----|----|-----|----|
|images|Array|图片数组，元素为对象，每个元素的有效属性为src（图片链接）和href（点击图片所访问的URL）||
|auto|Boolean|是否自动播放，true：自动播放；false：禁止自动播放|true|
|delay|Number|自动播放的时间间隔，单位ms，图片切换效果的时间为1000ms，设置该值时应大于1000ms|2000|