<!--
 * @Description: 
 * @Author: 姜泽
 * @Date: 2021-07-22 11:05:58
 * @LastEditTime: 2021-07-26 16:03:50
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
          data: ['上月完成率', '本月完成率'],
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
            '1号',
            '2号',
            '3号',
            '4号',
            '5号',
            '6号',
            '7号',
            '8号',
            '9号',
            '10号',
            '11号',
            '12号',
            '13号',
            '14号',
            '15号'
          ]
        },
        yAxis: {
          type: 'value',
          splitLine: { show: false }
        },
        series: [
          {
            name: '本月完成率',
            data: [
              123,
              321,
              99,
              123,
              321,
              220,
              322,
              222,
              120,
              54,
              231,
              154,
              222,
              182,
              218,
              102
            ],
            smooth: true,
            type: 'line',
            itemStyle: {
              color: '#FF7F50'
            },
            areaStyle: {
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
                { offset: 0, color: '#FF7F50' }, //渐变色
                { offset: 1, color: 'rgba(0,0,0,0)' } //渐变色
              ]),
              borderRadius: 2
            }
          },
          {
            name: '上月完成率',
            data: [
              223,
              221,
              199,
              123,
              321,
              220,
              330,
              100,
              150,
              154,
              231,
              154,
              122,
              152,
              200,
              92
            ],
            smooth: true,
            type: 'line',
            itemStyle: {
              color: '#1E90FF'
            },
            areaStyle: {
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
                { offset: 0, color: '#1E90FF' }, //渐变色
                { offset: 1, color: 'rgba(0,0,0,0)' } //渐变色
              ]),
              borderRadius: 2
            }
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
