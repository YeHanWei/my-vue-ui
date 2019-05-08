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