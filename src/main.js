/*
* js入口文件
* */
import Vue from 'vue';
import App from './App.vue';
import router from './router'

new Vue({
  el:'#app',
  render:h => h(App),
  router//多个几个组件标签//多了两个属性
})
