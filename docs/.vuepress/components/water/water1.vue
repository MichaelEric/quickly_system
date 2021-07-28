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
        data: [66],
        colors: ["#fb7293", "#e690d1"],
      },
    };
  },
};
</script>
