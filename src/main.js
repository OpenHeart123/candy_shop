/*
      入口js
*/
import Vue from 'vue'
import App from './App.vue'
//定义全局组件
import {Button}  from 'mint-ui'

import './mock/mockServer'   //加载mockServer

import router from './router'
import store from './store'
//注册全局组件
Vue.component(Button.name,Button)  //<mt-button>可以使用了
new Vue({
    el:"#app",
    render:h=>h(App),
    router,
    store
})
