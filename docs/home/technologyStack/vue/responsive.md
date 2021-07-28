<!--
 * @Description: 
 * @Author: 郜鹏飞
 * @Date: 2021-07-27 17:05:47
 * @LastEditTime: 2021-07-27 17:45:37
-->
# 响应式组件


::: tip 说明
该组件适用于pc端，使用时需将px转为rem才能实现适配，引入后当前页面可实现适配，不影响其他页面。
:::

# 样式

<responsive-index></responsive-index>


引入组件
将组件放入src\components的组件文件夹内，将要适配的内容放在组件中，在需要使用的页面进行如下引入：
```html
<template>
  <div>
    <responsive>
        <div class="test-wrap"></div>
    </responsive>
  </div>
</template>
```
```js
import responsive from '../../components/responsive';
export default {
  components: {
    responsive
  },
}
```
不引入组件可直接使用下边的方法

```js
export default {
  data() {
    return {};
  },
  mounted() {
    this.setFontSize();
    window.addEventListener('resize', this.setFontSize);
  },
  methods: {
    //  设置根字体大小
    setFontSize() {
      let temp = (document.documentElement.clientWidth / 1920) * 16;
      document.documentElement.style.fontSize = temp + 'px';
    },
    // 重置
    resetFontSize() {
      window.removeEventListener('resize', this.setFontSize);
      document.documentElement.style = '';
    }
  },
  beforeDestroy() {
    this.resetFontSize();
  }
};
```