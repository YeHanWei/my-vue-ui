
## npm下载
```
npm install --save @heavy_leaf/my-vue-ui 
```

## 在项目中使用
```
// 导入包
import MyVueUI from '@heavy_leaf/my-vue-ui'
// 注册插件
Vue.use(MyVueUI)
```

# 组件
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

## 鼠标跟随组件（my-follow-mouse）
### 使用
```
<template>
    <my-follow-mouse></my-follow-mouse>
</template>
```
### props
|名称|类型|说明|默认值|
|-----|----|-----|----|
|amount|Number|跟随点的数量|5|
|color|Array|跟随点的颜色数组|[]|
|zIndex|Number|z-index样式的值|-10|
|minSize|Number|尺寸最小的一个跟随点，单位px|10|
|sizeInterval|Number|相邻两个跟随点的尺寸差|1|
|timeInterval|Number|相邻两个跟随点运动时延差，单位ms|50|

## 水平垂直居中容器（my-center-content）
### 功能
该组件是一个容器，包含在该组件中的内容程水平垂直居中布局。
## 使用
使用时，应为该容器或该容器的父元素设置宽高（容器宽高默认为100%）,因为容器的内容无法撑起容器的宽高。
```
// 为容器设置宽高
<my-center-content :width="'500px'" :height="'500px'">居中内容，支持文本与HTML</my-center-content>
```
> 注意：容器使用的是IE怪异盒子模型，即box-sizing为border-box。同时，要为容器设置宽高CSS样式时，请使用内联样式。

### props
|名称|类型|说明|默认值|
|-----|----|-----|----|
|width|String|容器宽度|"100%"|
|height|String|容器高度|"100%"|
