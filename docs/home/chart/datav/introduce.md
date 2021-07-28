<!--
 * @Description: datav
 * @Author: 姜泽
 * @Date: 2021-01-20 15:58:31
 * @EditAuthor: 修改人名称
 * @LastEditTime: 2021-05-21 09:25:00
-->

## 说明

组件库基于 Vue ，主要用于构建大屏（全屏）数据展示页面即数据可视化，具有多种类型组件可供使用

::: tip 兼容性
组件库的开发和调试都使用 Chrome 浏览器，没有时间和精力做其他浏览器的兼容，尤其是 IE。
所以请使用 Chrome 浏览器。
:::

::: warning 宽高异常
组件的默认宽高都是 100%，可以根据父容器宽高进行自适应，但在某些情况下组件宽高可能表现异常，这种情况一般是因为组件的父容器宽高发生了变化，而组件没有侦知这一变化，你可以在组件上绑定 key 值，在更改父容器宽高且页面完成重绘后（使用\$nextTick），更新 key 值，使组件强制刷新，以获取正确宽高。
:::

::: danger 宽高异常
避免你的组件更新了数据后，状态却不刷新，也就是没变化，请务必看这里

组件 props 均未设置 deep 监听，刷新 props 时，请直接生成新的 props 对象（基础数据类型除外），或完成赋值操作后使用 ES6 拓展运算符生成新的 props 对象（this.someProps = { ...this.someProps }）。
:::

## 安装

### npm

```sh
npm install @jiaminghi/data-view
```

### yarn

```sh
yarn add @jiaminghi/data-view
```

## 使用

```js
// 将自动注册所有组件为全局组件
import dataV from "@jiaminghi/data-view";

Vue.use(dataV);
```

## 按需引入

```js
import { borderBox1 } from "@jiaminghi/data-view";

Vue.use(borderBox1);
```
