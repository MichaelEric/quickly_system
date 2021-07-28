<!--
 * @Description: 
 * @Author: 姜泽
 * @Date: 2021-07-22 11:05:58
 * @LastEditTime: 2021-07-26 15:49:36
-->
<template>
  <div class="h-100">
    <ul class="item-wrap">
      <li>
        <span class="item-title">标题</span>
        <span class="item-des">描述</span>
        <span class="item-date">日期</span>
      </li>
    </ul>
    <vue-seamless-scroll
      class="warp"
      :data="listData"
      :class-option="classOption"
    >
      <ul class="item">
        <li v-for="(item, index) in listData" :key="index">
          <span class="title" v-text="item.title"></span>
          <span class="title" v-text="item.des"></span>
          <span class="date" v-text="item.date"></span>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll';
export default {
  components: { vueSeamlessScroll },
  data() {
    return {
      classOption: {
        step: 0.4
      },
      listData: [
        {
          title: '名称',
          des: '描述描述描述描述描述描述描述描述描',
          date: '2017-12-16'
        },
        {
          title: '名称',
          des: '描述描述描述描述描述描述描述描述描',
          date: '2017-12-16'
        },
        {
          title: '名称',
          des: '描述描述描述描述描述描述描述描述描',
          date: '2017-12-16'
        },
        {
          title: '名称',
          des: '描述描述描述描述描述描述描述描述描',
          date: '2017-12-16'
        },
        {
          title: '名称',
          des: '描述描述描述描述描述描述描述描述描',
          date: '2017-12-16'
        },
        {
          title: '名称',
          des: '描述描述描述描述描述描述描述描述描',
          date: '2017-12-16'
        },
        {
          title: '名称',
          des: '描述描述描述描述描述描述描述描述描',
          date: '2017-12-16'
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.h-100 {
  padding: 0 10px;
  box-sizing: border-box;
}
.warp {
  height: 270px;
  width: 100%;
  overflow: hidden;
}
.item-wrap {
  background: url('../../image/screen/title.png') no-repeat center center;
  background-size: 100% 100%;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}
li {
  display: block;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: rgb(120, 130, 188);
  text-align: center;
}

li span:nth-of-type(1) {
  width: 20%;
}
li span:nth-of-type(2) {
  width: 50%;
}
li span:nth-of-type(3) {
  width: 30%;
}
</style>
