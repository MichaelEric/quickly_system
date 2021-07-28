<!--
 * @Description: datav
 * @Author: 姜泽
 * @Date: 2021-01-20 15:58:31
 * @EditAuthor: 修改人名称
 * @LastEditTime: 2021-05-21 14:51:02
-->

## 水位图

水位图有三种形态，多种配置，具体使用示例如下：

```html
<dv-water-level-pond :config="config" style="width:150px;height:200px" />
```

## 矩形水位图

<water-water1 />

<<< @/docs/.vuepress/components/water/water1.vue

## 圆角水位图

<water-water2 />

<<< @/docs/.vuepress/components/water/water2.vue

## 圆形水位图

<water-water3 />

<<< @/docs/.vuepress/components/water/water3.vue

## config 属性

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|data	|水位位置[1]	|Array<Number\>	|-|[]|
|shape	|水位图形状	|String|[2]|'rect'|
|colors|水位图配色|Array<String\>|[3]| [4]|
|waveNum|波浪数量|Number|-|3|
|waveHeight|波浪高度|Number|-|40|
|waveOpacity|波浪透明度	|Number|-|0.4|
|formatter|信息格式化	|String|-|'{value}%'[5]|
 
</div>

## 注释

[1] 可以有多个水位，但默认显示值最大的水位信息。

[2] 有三种形状可供选择：矩形 rect、圆角矩形 roundRect、圆形 round。

[3] 颜色支持 hex|rgb|rgba|颜色关键字等四种类型。

[4] 默认配色为['#00BAFF', '#3DE7C9'], 自动应用渐变色，若不想使用渐变色，请配置两个相同的颜色。

[5] 自动使用最大的水位值替换字符串中的'{value}'标记。
