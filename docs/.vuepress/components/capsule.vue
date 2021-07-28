<template>
  <div class="chart-container">
    <dv-capsule-chart :config="config" style="width:300px;height:200px" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        data: [
          {
            name: "天津",
            value: 456,
          },
          {
            name: "北京",
            value: 123,
          },
          {
            name: "广州",
            value: 98,
          },
          {
            name: "上海",
            value: 75,
          },
          {
            name: "深圳",
            value: 66,
          },
        ],
        colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
        // unit: "单位",
        showValue: true,
      },
    };
  },
};
</script>
