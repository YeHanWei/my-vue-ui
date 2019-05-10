## 开关按钮（my-switch）
### 功能
点击按钮，可以切换true和false值。
### 使用
```
<template>
    <my-switch :width="'40px'" :activeColor="'red'" :inactiveColor="'green'" v-model="value"></my-switch>
</template>
```
### props
|名称|类型|说明|默认值|
|-----|----|-----|----|
|value/v-model|Boolean|双向数据绑定值，必须要有，否则无法正常使用||
|width|Number|按钮的宽度，高度为宽度的一半。单位：px|50|
|inactiveColor|String|按钮关闭状态的颜色|'#CCC'|
|activeColor|String|按钮激活状态的颜色|'red'|