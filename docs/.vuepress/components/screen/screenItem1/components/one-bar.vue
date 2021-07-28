<!--
 * @Description: 
 * @Author: 姜泽
 * @Date: 2021-07-22 11:05:58
 * @LastEditTime: 2021-07-26 16:03:35
-->
<template>
  <div class="h-100" :id="el"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  props: ['el'],
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
          data: ['总数量', '使用数量'],
          textStyle: {
            color: '#ffffff'
          },
          top: 0,
          right: 10
        },
        tooltip: {
          show: true
        },
        grid: {
          top: 20,
          left: 30,
          right: 10,
          bottom: 20
        },
        xAxis: {
          type: 'category',
          data: [
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六',
            '星期日'
          ]
        },
        yAxis: {
          type: 'value',
          splitLine: { show: false }
        },
        series: [
          {
            name: '总数量',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: 10,
            borderRadius: 5,
            itemStyle: {
              label: {
                show: false, //开启显示
                position: 'top', //在上方显示
                textStyle: {
                  //数值样式
                  color: '#fff',
                  fontSize: 12
                }
              },
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#8cecab' }, //柱图渐变色
                { offset: 0.5, color: '#33bc5c' }, //柱图渐变色
                { offset: 1, color: '#018a2b' } //柱图渐变色
              ]),
              borderRadius: 2
            }
          },
          {
            name: '使用数量',
            data: [25, 30, 15, 50, 20, 10, 30],
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              label: {
                show: false, //开启显示
                position: 'top', //在上方显示
                textStyle: {
                  //数值样式
                  color: '#fff',
                  fontSize: 12
                }
              },
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#05e2ff' }, //柱图渐变色
                { offset: 0.5, color: '#00b3cb' }, //柱图渐变色
                { offset: 1, color: '#0b636f' } //柱图渐变色
              ]),
              borderRadius: 2
            }
          },
          {
            data: [25, 30, 15, 50, 20, 10, 30],
            type: 'line',
            barWidth: 10
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

<style></style>
