<template>
  <div class="chart-container">
    <dv-water-level-pond :config="config" style="width:150px;height:200px" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        colors: ["#e690d1", "#32c5e9"],
        data: [66, 45],
        shape: "roundRect",
      },
    };
  },
};
</script>
