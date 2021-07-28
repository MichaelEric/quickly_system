<!--
 * @Description: 
 * @Author: 姜泽
 * @Date: 2021-07-22 11:05:58
 * @LastEditTime: 2021-07-26 15:26:24
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
        grid: {
          x: 40,
          x2: 100,
          y2: 150
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '销售', max: 6500 },
            { name: '管理', max: 16000 },
            { name: '信息', max: 30000 },
            { name: '客服', max: 38000 },
            { name: '研发', max: 52000 },
            { name: '市场', max: 25000 }
          ]
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: '预算分配（Allocated Budget）'
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: '实际开销（Actual Spending）'
              }
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
