<!--
 * @Description: 
 * @Author: 姜泽
 * @Date: 2021-07-22 11:05:58
 * @LastEditTime: 2021-07-26 16:20:20
-->
<template>
  <div
    class="h-100 guage-wrap"
    :id="el"
    :style="{ backgroundSize: bgSize }"
  ></div>
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
          top: 0,
          left: 0
        },
        series: [
          {
            startAngle: 90,
            endAngle: -270,
            radius: this.radius,
            splitNumber: 5,
            type: 'gauge',
            progress: {
              show: true,
              width: 8,
              roundCap: true
            },
            axisLine: {
              show: false,
              roundCap: true,
              lineStyle: {
                width: 3
              }
            },
            axisTick: {
              length: 5,
              splitNumber: 10,
              distance: -2,
              lineStyle: {
                color: '#778899',
                width: 3,
                shadowColor: this.gaugeColor
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            anchor: {
              show: false,
              showAbove: false
            },
            title: {
              show: false
            },
            detail: {
              valueAnimation: true,
              fontSize: 18,
              offsetCenter: [0, 0],
              color: this.gaugeColor
            },
            pointer: {
              show: false
            },
            data: [
              {
                value: this.gaugeValue,
                itemStyle: {
                  color: this.gaugeColor
                },
                detail: {
                  formatter: '{value}%'
                }
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

<style scoped>
.guage-wrap {
  /* background: url('../../image/screen/ring.png') no-repeat center center; */
}
</style>
