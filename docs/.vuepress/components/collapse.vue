<template>
  <div class="collapse-wrap">
    <!-- 有展开收缩功能 -->
    <div class="is-collapse" v-if="isCollapse">
      <div
        class="collapse-header"
        v-if="isTitle"
        :style="{ 'background-color': backgroundColor }"
      >
        <slot name="title" :style="{ color: titleColor }"></slot>
        <span
          v-if="isToggleText"
          class="collapse-toggle"
          :style="{ color: handleColor }"
          @click="isToggle = !isToggle"
        >
          {{ !isToggle ? openText : closeText }}
          <i
            v-if="isToggleIcon"
            :class="!isToggle ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
          ></i>
        </span>
      </div>
      <div class="collapse-main">
        <transition name="slide-fade">
          <slot v-if="isToggle" name="collapse-main"></slot>
        </transition>
      </div>
    </div>
    <!-- 没有展开收缩功能 -->
    <div class="no-collapse" v-if="!isCollapse">
      <div
        class="no-collapse-header"
        v-if="isTitle"
        :style="{ 'background-color': backgroundColor }"
      >
        <slot name="title" :style="{ color: titleColor }"></slot>
      </div>
      <div class="no-collapse-main">
        <slot name="collapse-main"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // isCollapse 默认true为存在展开收缩功能,false为没有此功能
    isCollapse: {
      type: Boolean,
      default: true
    },
    // isTitle 默认true为存在标题,false为不展示标题
    isTitle: {
      type: Boolean,
      default: true
    },
    // 背景色
    backgroundColor: {
      type: String,
      default: ''
    },
    // 标题颜色
    titleColor: {
      type: String,
      default: ''
    },
    // 展开收缩颜色
    handleColor: {
      type: String,
      default: ''
    },
    // 是否需要展开收缩文字
    isToggleText: {
      type: Boolean,
      default: true
    },
    // 是否需要展开收缩图标
    isToggleIcon: {
      type: Boolean,
      default: true
    },
    // 展开文字
    openText: {
      type: String,
      default: '展开'
    },
    // 收缩文字
    closeText: {
      type: String,
      default: '收起'
    }
  },
  data() {
    return {
      isToggle: true
    };
  }
};
</script>
<style scoped>
.collapse-header {
  height: 40px;
  background-color: #f5f5f5;
  padding: 0 15px;
  box-sizing: border-box;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.no-collapse-header {
  height: 40px;
}
.collapse-toggle {
  font-weight: 100 !important;
  font-size: 14px;
  cursor: pointer;
}
.collapse-main {
  padding: 20px 0;
  box-sizing: border-box;
  overflow: hidden;
}
.no-collapse-main {
  margin-bottom: 20px;
}
</style>
