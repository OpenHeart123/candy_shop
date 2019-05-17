/*
   路由模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件文件夹下的组件
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

// 全局注册Vue-router组件
Vue.use(VueRouter)

// 配置路由表并导出
export default new VueRouter({
  //去掉地址中的哈希#
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/msite',

  },
  {
    path: '/msite',
    component: Msite,
    meta: {
      footGuideShow: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      footGuideShow: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      footGuideShow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      footGuideShow: true
    }
  },
  {
    path: '/login',
    component: Login,
  }
  ]
})
