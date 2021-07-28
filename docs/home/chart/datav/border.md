<!--
 * @Description: datav
 * @Author: 姜泽
 * @Date: 2021-01-20 15:58:31
 * @EditAuthor: 修改人名称
 * @LastEditTime: 2021-05-21 10:30:01
-->

## 说明

边框均由 SVG 元素绘制，体积轻量不失真，它们的使用极为方便。

::: tip 边框内布局
边框组件默认宽高均为 100%，边框内部的节点将被 slot 插槽分发至边框组件下 class 为 border-box-content 的容器内，如有布局需要，请针对该容器布局，以免产生样式冲突，导致边框显示异常。
:::

::: warning 注意事项
建议把边框内的节点封装成组件，以组件的形式置入边框。这是因为 slot 的渲染机制较为特殊，如果你要在组件 mounted 后对边框内置入的节点进行页面渲染状态敏感的操作（获取 DOM 宽高，实例化 echarts 图表等），可能会发生非预期的结果。比如获取的 DOM 宽高为 0，封装成组件后可避免这种情况。
:::

::: tip 重置宽高
如果边框组件的父容器宽高发生了变化，而边框组件没有侦知这一变化，边框就无法自适应父容器宽高。针对这种情况，你可以给边框绑定 key 值，在父容器宽高发生变化且完成渲染后更改 key 值，强制销毁边框组件实例并重新渲染，重新获取宽高。但这会造成边框内的组件同样被销毁重新渲染，这会带来额外的性能消耗，并导致组件状态丢失，此时我们可以调用组件内置的 initWH 方法去重置边框组件的宽高以避免销毁实例重新渲染带来的非预期副作用。
:::

## 自定义颜色

```html
<dv-border-box-1 :color="['red', 'green']" backgroundColor="blue">
  dv-border-box-1
</dv-border-box-1>
```

<div class="full-width-table">
 
| 参数 | 说明 | 类型 |
|:----:|:---:|:----:|
|name|姓名 |String|
|age|年龄 |Number|
|salary|薪水 |Number|
 
</div>

::: tip
color 属性支持配置两个颜色，一主一副。
颜色类型可以为颜色关键字、十六进制色、RGB 及 RGBA。
:::

## dv-border-Box-1

<div class="border-box-contaier">
  <dv-border-box-1></dv-border-box-1>
</div>

```html
<dv-border-box-1>dv-border-box-1</dv-border-box-1>
```

## dv-border-Box-2

<div class="border-box-contaier">
  <dv-border-box-2></dv-border-box-2>
</div>

```html
<dv-border-box-2>dv-border-box-2</dv-border-box-2>
```

## dv-border-Box-3

<div class="border-box-contaier">
  <dv-border-box-3></dv-border-box-3>
</div>

```html
<dv-border-box-3>dv-border-box-3</dv-border-box-3>
```

## dv-border-Box-4

<div class="border-box-contaier">
  <dv-border-box-4></dv-border-box-4>
</div>

```html
<dv-border-box-4>dv-border-box-4</dv-border-box-4>
```

## dv-border-Box-4(反转)

<div class="border-box-contaier">
  <dv-border-box-4 :reverse="true"></dv-border-box-4>
</div>

```html
<dv-border-box-4 :reverse="true">dv-border-box-4(反转)</dv-border-box-4>
```

## dv-border-Box-5

<div class="border-box-contaier">
  <dv-border-box-5></dv-border-box-5>
</div>

```html
<dv-border-box-5>dv-border-box-5</dv-border-box-5>
```

## dv-border-Box-5(反转)

<div class="border-box-contaier">
  <dv-border-box-5 :reverse="true"></dv-border-box-5>
</div>

```html
<dv-border-box-5 :reverse="true">dv-border-box-5(反转)</dv-border-box-5>
```

## dv-border-Box-6

<div class="border-box-contaier">
  <dv-border-box-6></dv-border-box-6>
</div>

```html
<dv-border-box-6>dv-border-box-6</dv-border-box-6>
```

## dv-border-Box-7

<div class="border-box-contaier">
  <dv-border-box-7></dv-border-box-7>
</div>

```html
<dv-border-box-7>dv-border-box-7</dv-border-box-7>
```

## dv-border-Box-8

<div class="border-box-contaier">
  <dv-border-box-8></dv-border-box-8>
</div>

```html
<dv-border-box-8>dv-border-box-8</dv-border-box-8>
```

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|dur|单词动画时长（秒） |Number|-|3|
 
</div>

## dv-border-Box-8(反转)

<div class="border-box-contaier">
  <dv-border-box-8 :reverse="true"></dv-border-box-8>
</div>

```html
<dv-border-box-8 :reverse="true">dv-border-box-8(反转)</dv-border-box-8>
```

## dv-border-Box-9

<div class="border-box-contaier">
  <dv-border-box-9></dv-border-box-9>
</div>

```html
<dv-border-box-9>dv-border-box-9</dv-border-box-9>
```

## dv-border-Box-10

<div class="border-box-contaier">
  <dv-border-box-10></dv-border-box-10>
</div>

```html
<dv-border-box-10>dv-border-box-10</dv-border-box-10>
```

## dv-border-Box-11

<div class="border-box-contaier">
  <dv-border-box-11 :title="'标题部分'" :titleWidth="300"></dv-border-box-11>
</div>

```html
<dv-border-box-11>dv-border-box-11</dv-border-box-11>
```

### 特殊配置

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|title|边框标题	 |String|-|''|
|titleWidth|标题宽度|Number|-|250|
 
</div>

## dv-border-Box-12

<div class="border-box-contaier">
  <dv-border-box-12></dv-border-box-12>
</div>

```html
<dv-border-box-12>dv-border-box-12</dv-border-box-12>
```

## dv-border-Box-13

<div class="border-box-contaier">
  <dv-border-box-13></dv-border-box-13>
</div>

```html
<dv-border-box-13>dv-border-box-13</dv-border-box-13>
```
