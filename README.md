## npm下载
```
npm install --save @heavy_leaf/my-vue-ui 
```

## 导入包
```
import '@heavy_leaf/my-vue-ui'
import '@heavy_leaf/my-vue-ui/my-vue-ui.css'
```

# 组件
## 轮播图组件（figures-play）
### 功能
自动播放，手动选择，点击图片可访问预设链接。
### 在模版中使用
```
<template>
    <figures-play :images="images"></figures-play>
</tempalte>
```
组件内部使用的是类选择器，要覆盖组件默认样式，请使用优先级比类选择器更高的CSS选择器，如id选择器，或使用内联样式。
```
<template>
    <figures-play :images="images" style="width: 500px;"></figures-play>
</template>
```
### props属性
|名称|类型|说明|默认值|
|-----|----|-----|----|
|images|Array|图片数组，元素为对象，每个元素的有效属性为src（图片链接）和href（点击图片所访问的URL）||
|auto|Boolean|是否自动播放，true：自动播放；false：禁止自动播放|true|
|delay|Number|自动播放的时间间隔，单位ms，图片切换效果的时间为1000ms，设置该值时应大于1000ms|2000|

## 鼠标跟随组件（follow-mouse）
### 使用
```
<template>
    <follow-mouse></follow-mouse>
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
