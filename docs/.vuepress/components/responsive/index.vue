<!--
 * @Description: 响应式组件（适用pc）
 * @Author: 郜鹏飞
 * @Date: 2021-07-27 16:02:14
 * @LastEditTime: 2021-07-27 17:46:17
-->
<template>
  <div>
    <slot>
      <span style="font-size:1.5rem">响应式组件(缩放屏幕可观察效果)</span>
      <div class="test-wrap">

      </div>
    </slot>
  </div>
</template>

<script>
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
</script>

<style scoped>
.test-wrap{
  width: 10rem;
  height: 10rem;
  background-color: blue;
}
</style>
