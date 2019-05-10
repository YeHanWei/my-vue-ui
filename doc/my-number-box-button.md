## 加减数字框（my-number-box-btn）
### 功能
通过点击加减按钮，在限定范围内以一点的差值改变数值。
### 使用
```
<template>
    <my-number-box-btn v-model="value" :minValue="0" :maxValue="10" :interval="3"></my-number-box-btn>
</template>
```
### props
|名称|类型|说明|默认值|
|-----|----|-----|----|
|value/v-model|Number|双向数据绑定的数值|0|
|minValue|Number|最小值|0|
|maxValue|Number|最大值|100|
|interval|Number|每次加/减的变化值|1|
|width|Number|组件宽度。组件高度为组件宽度的1/4。单位：px|100|