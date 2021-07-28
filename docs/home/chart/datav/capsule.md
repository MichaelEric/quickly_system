<!--
 * @Description: datav
 * @Author: 姜泽
 * @Date: 2021-01-20 15:58:31
 * @EditAuthor: 修改人名称
 * @LastEditTime: 2021-05-21 14:36:05
-->

## 胶囊柱图

```html
<dv-capsule-chart :config="config" style="width:300px;height:200px" />
```

## 基本示例

<capsule />

<<< @/docs/.vuepress/components/capsule.vue

## config 属性

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|data	|柱数据	|Array<object\>	|[data属性](#data-属性)	|[]|
|unit|单位|String|'55%'|-|''|
|colors|环颜色		|Array<String\>|hex\|rgb\|rgba|['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']|
|showValue|显示数值	|Boolean	|-|false|
 
</div>

## data 属性

<div class="full-width-table">
 
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:---:|:----:|:----:|:----:|
|name	|柱名称	|String	|-|-|
|value	|柱对应值|Number	|-|-|
 
</div>
