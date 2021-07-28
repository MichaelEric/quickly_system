<!--
 * @Description: datav
 * @Author: 姜泽
 * @Date: 2021-01-20 15:58:31
 * @EditAuthor: 修改人名称
 * @LastEditTime: 2021-05-21 15:09:10
-->

## 用法

```html
<dv-percent-pond :config="config" style="width:200px;height:100px;" />
```

## 基本示例

<percent-percent1 />

<<< @/docs/.vuepress/components/percent/percent1.vue

## 调节边框

<percent-percent2 />

<<< @/docs/.vuepress/components/percent/percent2.vue

## 线条间隙

<percent-percent3 />

<<< @/docs/.vuepress/components/percent/percent3.vue

## 局部渐变

<percent-percent4 />

<<< @/docs/.vuepress/components/percent/percent4.vue

## 定制块隙长度

<percent-percent5 />

<<< @/docs/.vuepress/components/percent/percent5.vue

:::tip
百分比标签已通过 CSS display:none 隐藏。
:::

## config 属性

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|value|进度池数值|Number|0-100|0|
|colors|进度池配色|Array<String\>|[1]|[2]|
|borderWidth|边框宽度|Number|-|3|
|borderGap|边框间隙|Number|-|3|
|lineDash|线条间隙|Array<Number\>|-|[5, 1]|
|textColor|文字颜色|String|[1]|#fff|
|borderRadius|边框半径|Number|-|5|
|localGradient|局部渐变|Boolean|-|false|
|formatter|信息格式化|String|-|'{value}%'|
 
</div>

## 注释

[1] 颜色支持 hex|rgb|rgba|颜色关键字等四种类型。

[2] 默认配色为['#3DE7C9', '#00BAFF'], 自动应用渐变色，若不想使用渐变色，请配置两个相同的颜色。

[3] 自动使用 value 的值替换字符串中的'{value}'标记。
