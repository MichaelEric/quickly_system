<!--
 * @Description: 类名s代表screen，l代表left，c代表center，r代表right，t代表top，b代表bottom
-->
<template>
  <div class="h-100 pe-count">
    <span @click="fullScreen('screenItem')" class="fullscreen-btn"
      >切换全屏</span
    >
    <div class="h-100" id="screenItem">
      <!-- header部分 -->
      <header class="s-header">
        <h1>大屏监控</h1>
      </header>
      <div class="s-wrap">
        <div class="s-item-wrap s-l">
          <div class="s-l-t">
            <h2 class="area-title">设备数量监控</h2>
            <div class="area-main">
              <one-bar el="lt"></one-bar>
            </div>
          </div>
          <div class="s-l-c">
            <h2 class="area-title">日生产完成率</h2>
            <div class="area-main">
              <prod-line el="lc"></prod-line>
            </div>
          </div>
          <div class="s-l-b">
            <h2 class="area-title">生产情况</h2>
            <div class="area-main">
              <scroll-item></scroll-item>
            </div>
          </div>
        </div>
        <div class="s-item-wrap s-c">
          <div class="s-c-t" style="text-align: center">
            <img src="../image/screen/center.png" class="h-100" alt="" />
            <dv-decoration-2 style="width:100%;height:5px;" />
            <div class="s-c-item s-c-lt">
              <div class="s-c-item-icon">
                <img src="../image/screen/sczz.png" />
              </div>
              <div class="s-c-item-des">
                <p>标题</p>
                <p>描述部分</p>
              </div>
            </div>
            <div class="s-c-item s-c-lb">
              <div class="s-c-item-icon">
                <img src="../image/screen/jk.png" />
              </div>
              <div class="s-c-item-des">
                <p>标题</p>
                <p>描述部分</p>
              </div>
            </div>
            <div class="s-c-item s-c-rt">
              <div class="s-c-item-icon">
                <img src="../image/screen/sb.png" />
              </div>
              <div class="s-c-item-des">
                <p>标题</p>
                <p>描述部分</p>
              </div>
            </div>
            <div class="s-c-item s-c-rb">
              <div class="s-c-item-icon">
                <img src="../image/screen/cn.png" />
              </div>
              <div class="s-c-item-des">
                <p>标题</p>
                <p>描述部分</p>
              </div>
            </div>
          </div>
          <div class="s-c-b">
            <div class="b-l-item">
              <pie-item el="pieItem"></pie-item>
              <!-- <radar-item el="radarItem"></radar-item> -->
            </div>
            <div class="b-r-item">
              <div class="b-r-item-main">
                <prod-line el="brItem2"></prod-line>
              </div>
              <div class="b-r-item-main">
                <one-bar el="brItem1"></one-bar>
              </div>
            </div>
          </div>
        </div>
        <div class="s-item-wrap s-r">
          <div class="s-r-t">
            <h2 class="area-title">排产情况</h2>
            <div class="area-main prod-status-wrap">
              <div class="prod-status-item">
                <gauge-half
                  class="prod-status-chart"
                  :el="'guageHalf'"
                  :gauge-value="80"
                  gauge-color="#0099CC"
                  radius="90%"
                ></gauge-half>
                <div class="prod-status-des">
                  <div class="guage-text">
                    <span>生产目标</span>
                    <span class="guage-percent" style="color: #FF9933"
                      >45645</span
                    >
                    <span>件</span>
                  </div>
                  <div class="guage-text">
                    <span>实际产量</span>
                    <span class="guage-percent" style="color: #009966"
                      >35888</span
                    >
                    <span>件</span>
                  </div>
                </div>
              </div>
              <div class="prod-status-grogress">
                <div class="ps-item">
                  上月完成度：<dv-percent-pond
                    :config="{
                      value: 40,
                      localGradient: true,
                      borderRadius: 3
                    }"
                    style="width:200px;height:20px;"
                  />
                  <span>40%</span>
                </div>
                <div class="ps-item">
                  本月完成度：<dv-percent-pond
                    :config="{
                      value: 100,
                      localGradient: true,
                      borderRadius: 3
                    }"
                    style="width:200px;height:20px;"
                  />
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="s-r-c">
            <h2 class="area-title">生产任务</h2>
            <div class="area-main">
              <scroll-item></scroll-item>
            </div>
          </div>
          <div class="s-r-b">
            <h2 class="area-title">客户信息</h2>
            <div class="area-main">
              <div class="guage-item guage-a h-100">
                <gauge-chart
                  :el="'guageA'"
                  :gauge-value="70"
                  gauge-color="#6666CC"
                  radius="75%"
                  bg-size="60%"
                ></gauge-chart>
                <div class="guage-text">
                  <span>订单增率</span>
                  <span class="guage-percent">
                    <i class="fa fa-level-up" aria-hidden="true"></i>70%</span
                  >
                </div>
              </div>
              <div class="guage-item guage-b h-100">
                <gauge-chart
                  :el="'guageB'"
                  :gauge-value="80"
                  gauge-color="#FF9966"
                  radius="75%"
                  bg-size="60%"
                ></gauge-chart>
                <div class="guage-text">
                  <span>生产增率</span>
                  <span class="guage-percent"
                    ><i class="fa fa-level-up" aria-hidden="true"></i>80%</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import oneBar from './components/one-bar.vue';
import prodLine from './components/prod-line.vue';
import scrollItem from './components/scroll-item.vue';
import gaugeChart from './components/gauge-chart.vue';
import gaugeHalf from './components/gauge-half.vue';
import pieItem from './components/pie-item.vue';
import radarItem from './components/radar-item.vue';
export default {
  name: 'billboardScreen',
  components: {
    oneBar,
    prodLine,
    scrollItem,
    gaugeChart,
    gaugeHalf,
    pieItem,
    radarItem
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    fullScreen(el) {
      const element = document.getElementById(el);
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen();
      }
    }
  }
};
</script>

<style scoped>
.h-100 {
  height: 100%;
}
.pe-count {
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;
}
#screenItem {
  background: url('../image/screen/screen-bg.jpg') no-repeat center center;
  background-size: 100% 100%;
}
.fullscreen-btn {
  height: 20px;
  line-height: 20px;
  position: absolute;
  left: 15px;
  color: #fff !important;
  top: 0.5%;
  cursor: pointer;
  font-size: 14px;
  z-index: 99999;
}
.s-header {
  height: 50px;
  line-height: 50px;
  background: url('../image/screen/header-bg.png') no-repeat center center;
  background-size: 100% 100%;
  position: relative;
}
.s-header h1 {
  margin-top: 0;
  margin-bottom: 0px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: -5%;
}
.s-wrap {
  height: calc(100% - 50px);
  display: flex;
}
.s-item-wrap {
  height: 100%;
}
.s-l {
  width: 28%;
}
.s-c {
  width: 44%;
  margin: 0 15px;
}
.s-r {
  width: 28%;
}
.s-l,
.s-c,
.s-r {
  display: flex;
  flex-direction: column;
}
.s-l-t,
.s-r-t {
  height: 33%;
}
.s-l-c,
.s-r-c {
  height: 33%;
  margin: 15px 0;
}
.s-l-b,
.s-r-b {
  height: 33%;
  margin-bottom: 15px;
}
.s-l-t,
.s-l-c,
.s-l-b,
.s-r-t,
.s-r-c,
.s-r-b {
  background: url('../image/screen/border-bg.png') no-repeat center center;
  background-size: 100% 100%;
  padding: 10px;
  box-sizing: border-box;
}
.s-c-t {
  height: 60%;
  margin-bottom: 25px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
}
.s-c-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
}
.s-c-item {
  position: absolute;
  width: 30%;
  height: 25%;
  z-index: 99;
  background: url('../image/screen/dicision-title-bg.png') no-repeat center
    center;
  background-size: 100% 100%;
  color: rgb(120, 130, 188);
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}
.s-c-lt {
  top: 8%;
  left: 4%;
}
.s-c-lb {
  bottom: 8%;
  left: 4%;
}
.s-c-rt {
  top: 8%;
  right: 4%;
}
.s-c-rb {
  bottom: 8%;
  right: 4%;
}
.s-c-item-icon {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.s-c-item-icon img {
  width: 50px;
}
.s-c-item-des {
  flex: 1;
  color: #ffcc33;
}
.s-c-item-des p:first-child {
  font-size: 24px;
  color: #fff;
}
.s-c-item-des p:last-child {
  margin-bottom: 0;
  color: rgb(120, 130, 188);
}
.s-c-b {
  height: 40%;
  background: url('../image/screen/border-bg.png') no-repeat center center;
  background-size: 100% 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 15px;
  display: flex;
}
.area-title {
  width: 150px;
  font-size: 16px;
  height: 35px;
  line-height: 33px;
  color: #fff;
  background: url('../image/screen/button3-click2.png') no-repeat left center;
  background-size: 100% 100%;
  padding-left: 10px;
  box-sizing: border-box;
  letter-spacing: 1px;
  margin-top: 0;
  margin-bottom: 0;
}
.area-main {
  height: calc(100% - 45px);
  overflow: hidden;
}
.guage-item {
  width: 50%;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.guage-text {
  font-size: 18px;
  color: rgb(120, 130, 188);
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
}
.guage-percent {
  margin-left: 10px;
  color: #ff9900;
}
.guage-percent i {
  margin-right: 5px;
}
.prod-status-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.prod-status-item {
  flex: 1;
  display: flex;
}
.prod-status-chart {
  width: 50%;
}
.prod-status-grogress {
  height: 50%;
  text-align: center;
  color: rgb(120, 130, 188);
  font-weight: 600;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-top: -10%;
}
.ps-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.ps-item span {
  display: inline-block;
  width: 80px;
}
.prod-status-des {
}
.guage-percent {
  color: red;
  margin: 0 5px !important;
}
.dv-percent-pond text {
  display: none !important;
}
/* 底部区域 */
.b-l-item {
  width: 40%;
}
.b-r-item {
  width: 60%;
}
.b-r-item .b-r-item-main {
  height: 50%;
  padding-top: 10px;
  box-sizing: border-box;
}
</style>
