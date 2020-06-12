/*
* 路由器对象模块
* */
import Vue from 'vue';
import VueRouter from  'vue-router';
import MSite from '../pages/MSite/MSite';
import Order from '../pages/Order/Order';
import Profile from '../pages/Profile/Profile';
import Search from '../pages/Search/Search';
import Login from '../pages/Login/Login';
//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
//所有路由
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta:{
        Showfooter:true
      }
    },
    {
      path:'/Order',
      component:Order,
      meta:{
        Showfooter:true
      }
    },
    {
      path:'/Profile',
      component:Profile,
      meta:{
        Showfooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        Showfooter:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]


})
