## 面板（my-panel）
### 描述
分头部与主体两部分，其中主体可隐藏。通过点击面板头部来控制面板的隐藏和显示。
### 使用
```
<template>
    <my-panel :width="'50%'" 
        :headerBackgroundColor="'red'" 
        :bodyBackgroundColor="'blue'" 
        :borderRadius="'2px'"
        :collapse="true">
        <template v-slot:header>
            <span>title</span>
        </template>
        <p>body</p>
    </my-panel>
</template>
```
### props
|名称|类型|说明|默认值|
|-----|----|-----|----|
|canCollapse|Boolean|是否可卷起（隐藏）|true|
|collapse|Boolean|初始状态是否卷起。（当canCollapse为true时可用）|false|
|headerBackgroundColor|String|头部背景颜色|'rgba(250, 250, 250, 0.8)'|
|bodyBackgroundColor|String|主体部分背景颜色|'rgba(250, 250, 250, 0.8)'|
|width|String|面板宽度|'100%'|
|borderColor|String|面板边框颜色|'#ccc'|
|borderRadius|String|面板圆角|'0'|
