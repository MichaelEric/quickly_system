<!--
 * @Description: datav
 * @Author: 姜泽
 * @Date: 2021-01-20 15:58:31
 * @EditAuthor: 修改人名称
 * @LastEditTime: 2021-05-21 10:30:46
-->

### 说明

数据可视化页面一般在浏览器中进行全屏展示，全屏容器将根据屏幕比例及当前浏览器窗口大小，自动进行缩放处理。浏览器全屏后，全屏容器将充满屏幕。

::: tip
建议在全屏容器内使用百分比搭配 flex 进行布局，以便于在不同的分辨率下得到较为一致的展示效果。

使用前请注意将 body 的 margin 设为 0，否则会引起计算误差，全屏后不能完全充满屏幕。
:::

```html
<dv-full-screen-container>content</dv-full-screen-container>
```
