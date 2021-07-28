<!--
 * @Description: 
 * @Author: 姜泽
 * @Date: 2021-07-22 11:05:58
 * @LastEditTime: 2021-07-26 15:26:04
-->
<template>
  <div class="h-100" :id="el"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  props: ['gaugeValue', 'el', 'gaugeColor', 'radius', 'bgSize'],
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initChart();
      }, 1000);
    });
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById(this.el);
      const myChart = echarts.init(chartDom);
      const option = {
        legend: {
          top: 'right'
        },
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: [10, 60],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 2
            },
            data: [
              { value: 40, name: '文字' },
              { value: 38, name: '文字 2' },
              { value: 32, name: '文字 3' },
              { value: 30, name: '文字 4' },
              { value: 28, name: '文字 5' },
              { value: 26, name: '文字 6' },
              { value: 22, name: '文字 7' },
              { value: 18, name: '文字 8' }
            ]
          }
        ]
      };
      option && myChart.setOption(option);
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
