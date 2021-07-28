<!--
 * @Description: 
 * @Author: jiangze
 * @Date: 2021-05-13 10:28:29
 * @LastEditTime: 2021-05-20 17:34:47
 * @LastEditors: jiangze
-->
<template>
  <div>
    <exspsheet
      :jsonParam="jsonParam"
      :blobParam="blobParam"
      :isFile="isFile"
      :isBlob="isBlob"
      :isJson="isJson"
      :isLocalFile="isLocalFile"
      @jsonResult="jsonResult"
      @blobResult="blobResult"
    ></exspsheet>
  </div>
</template>
<script>
import exspsheet from "exspsheet";
export default {
  name: "exspsheet-demo",
  data() {
    return {
      isLocalFile: true, //是否支持本地导入
      isFile: true, //是否导出本地文件
      isBlob: true, //是否导出blob格式
      isJson: true, //是否导出json格式
      jsonParam: "",
      blobParam: new Blob(),
    };
  },
  methods: {
    blobResult(data) {
      console.log(data);
    },
    jsonResult(data) {
      console.log(data);
    },
  },
  components: {
    exspsheet,
  },
};
</script>
<style>
.x-spreadsheet-toolbar {
  width: 680px !important;
}
.x-spreadsheet-sheet {
  width: 740px !important;
}
</style>
