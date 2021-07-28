/*
 * @Description: 插件部分
 * @Author:李智伟、jiangze
 * @Date:2021-05-19 10:31:13
 * @LastEditTime: 2021-05-21 15:50:35
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)
Vue.use(ElementUI);