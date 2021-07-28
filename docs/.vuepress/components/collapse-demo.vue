<template>
  <div class="">
    <collapse-item :is-collapse="true" handleColor="#666666">
      <span slot="title" class="collapse-title-16"> 基础信息</span>
      <div slot="collapse-main">
       <div>这是折叠主体</div>
      </div>
    </collapse-item>
    <collapse-item :is-collapse="true" handleColor="#666666">
      <span slot="title" class="collapse-title-16"> 基础信息</span>
      <div slot="collapse-main">
       <div>这是折叠主体</div>
      </div>
    </collapse-item>
  </div>
</template>

<script>
import collapseItem from './collapse.vue';
export default {
  components: {
    collapseItem
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
.collapse-title-16 {
  color: #333333;
  font-size: 18px;
  font-weight: 600;
}
</style>
