<template>
  <div id="chart" ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initFn();
    });
  },
  methods: {
    initFn() {
      let _this = this;
      let myChart = echarts.init(_this.$refs.chart);
      myChart.setOption({
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            name: "销量",
            barWidth: 30,
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 1,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(61,126,235,0.4)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(61,126,235,1)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
            },
            data: [5, 20, 36, 10, 10, 20],
          },
          {
            type: "bar",
            barGap: 0,
            barWidth: 6,
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 1,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(61,126,235,0.2)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(61,126,235,1)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
            },
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
#chart {
  width: 100%;
  height: 400px;
}
</style>
