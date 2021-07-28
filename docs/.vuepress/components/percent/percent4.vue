<template>
  <div class="chart-container">
    <dv-percent-pond :config="config" style="width:200px;height:100px;" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        value: 66,
        localGradient: true,
      },
    };
  },
};
</script>
