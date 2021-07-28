<!--
 * @Description: datav
 * @Author: 姜泽
 * @Date: 2021-01-20 15:58:31
 * @EditAuthor: 修改人名称
 * @LastEditTime: 2021-05-21 10:49:17
-->

## 说明

你可以使用装饰去点缀你的页面，以增强视觉效果，与边框组件相同，他们也是用 SVG 元素绘制的。

## 自定义颜色

所有装饰均支持自定义颜色，配置项及示例如下。

```html
<dv-decoration-1 :color="['red', 'green']" />
```

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|color	|自定义颜色	|string[]	|-|-|
 
</div>

::: tip
color 属性支持配置两个颜色，一主一副。

颜色类型可以为颜色关键字、十六进制色、RGB 及 RGBA。
:::

## dv-decoration-1

<div class="decoration-contaier">
  <dv-decoration-1 style="width:200px;height:50px;" />
</div>

```html
<dv-decoration-1 style="width:200px;height:50px;" />
```

## dv-decoration-2

<div class="decoration-contaier">
  <dv-decoration-2 style="width:200px;height:5px;" />
</div>

```html
<dv-decoration-2 style="width:200px;height:5px;" />
```

## dv-decoration-2(竖向)

<div class="decoration-contaier">
  <dv-decoration-2 :reverse="true" style="width:5px;height:150px;" />
</div>

```html
<dv-decoration-2 :reverse="true" style="width:5px;height:150px;" />
```

## dv-decoration-3

<div class="decoration-contaier">
  <dv-decoration-3 style="width:250px;height:30px;" />
</div>

```html
<dv-decoration-3 style="width:250px;height:30px;" />
```

## dv-decoration-4

<div class="decoration-contaier">
  <dv-decoration-4 :reverse="true" style="width:250px;height:5px;" />
</div>

```html
<dv-decoration-4 :reverse="true" style="width:250px;height:5px;" />
```

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|dur|单次动画时长(秒)|Number|-|3|
 
</div>

## dv-decoration-4(竖向)

<div class="decoration-contaier">
  <dv-decoration-4 style="width:5px;height:150px;" />
</div>

```html
<dv-decoration-4 style="width:5px;height:150px;" />
```

## dv-decoration-5

<div class="decoration-contaier">
  <dv-decoration-5 style="width:250px;height:40px;" />
</div>

```html
<dv-decoration-5 style="width:250px;height:40px;" />
```

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|dur|单次动画时长(秒)|Number|-|1.2|
 
</div>

## dv-decoration-6

<div class="decoration-contaier">
  <dv-decoration-6 style="width:300px;height:30px;" />
</div>

```html
<dv-decoration-6 style="width:300px;height:30px;" />
```

## dv-decoration-7

<div class="decoration-contaier">
  <dv-decoration-7 style="width:150px;height:30px;">Decoration</dv-decoration-7>
</div>

```html
<dv-decoration-7 style="width:150px;height:30px;">Decoration</dv-decoration-7>
```

## dv-decoration-8

<div class="decoration-contaier">
  <dv-decoration-8 style="width:300px;height:50px;" />
</div>

```html
<dv-decoration-8 style="width:300px;height:50px;" />
```

## dv-decoration-8(反转)

<div class="decoration-contaier">
  <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
</div>

```html
<dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
```

## dv-decoration-9

<div class="decoration-contaier">
  <dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>
</div>

```html
<dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>
```

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|dur|单次动画时长(秒)|Number|-|3|
 
</div>

## dv-decoration-10

<div class="decoration-contaier">
  <dv-decoration-10 style="width:90%;height:5px;" />
</div>

```html
<dv-decoration-10 style="width:90%;height:5px;" />
```

## dv-decoration-11

<div class="decoration-contaier">
  <dv-decoration-11 style="width:200px;height:60px;">dv-decoration-11</dv-decoration-11>
</div>

```html
<dv-decoration-11 style="width:200px;height:60px;">
  dv-decoration-11
</dv-decoration-11>
```

## dv-decoration-12

<div class="decoration-contaier">
  <dv-decoration-12 style="width:150px;height:150px;" />
</div>

```html
<dv-decoration-12 style="width:150px;height:150px;" />
```

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|scanDur|扫描动画时长(秒)|Number|-|3|
|haloDur|光晕动画时长(秒)|Number|-|2|
 
</div>
