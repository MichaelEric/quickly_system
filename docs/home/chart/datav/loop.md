<!--
 * @Description: datav
 * @Author: 姜泽
 * @Date: 2021-01-20 15:58:31
 * @EditAuthor: 修改人名称
 * @LastEditTime: 2021-05-21 12:03:43
-->

## 动态环图

基于 Charts 封装

```html
<dv-active-ring-chart :config="config" style="width:300px;height:300px" />
```

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|color	|自定义颜色	|string[]	|-|-|
 
</div>

## 基本示例

<loop-loop1 />

<<< @/docs/.vuepress/components/loop/loop1.vue

## config 属性

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|radius|环半径|String|Number	|'50%'|100	|'50%'|
|activeRadius|环半径（动态）	|String|Number	|'55%'|110	|'55%'|
|data|环数据	|Array<object\>|[data属性](#data-属性)|[]|
|lineWidth|环线条宽度|Number	|-|20|
|activeTimeGap|切换间隔(ms)|Number	|-|3000|
|color|环颜色	|Array<String\>|['#cccccc', '#dddddd']|[]|
|digitalFlopStyle|数字翻牌器样式|Object|-|[2\]|
|digitalFlopToFixed|数字翻牌器小数位数	|Number|-|0|
|digitalFlopUnit|数字翻牌器单位	|String|-|''|
|animationCurve|动效曲线	|String|[Transition](http://transition.jiaminghi.com/curveTable/)|'easeOutCubic'|
|animationFrame|动效帧数	|Number|[3\]|50|
|showOriginValue|显示原始值	|Boolean|-|false|
 
</div>

## data 属性

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|name	|环对应名称		|string	|-|-|
|value	|环对应值			|Number	|-|-|
 
</div>
