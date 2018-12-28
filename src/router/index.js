import Vue from 'vue'
import Router from 'vue-router'
//我的（my）  首页 （index） 列表页（list）  详情页 （detail） 购物车（shoppingcar）     
//  消息中心（info）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
// 共用组件：吸顶（myheader） 底部（myfooter）
import My from "../components/my"
import Index from "../components"
import List from "../components/list"
import Detail from "../components/detail"
import Shoppingcar from "../components/shoppingcar"
import Info from "../components/info"
Vue.use(Router)

const router =  new Router({
  //history去井号
  mode: 'hash',
  routes: [
    {
      path: '/my',
      // name: 'HelloWorld',
      component: My
    },
    {
      path: '/',
      component: Index
      // children: [
      // 	{
      // 		path: 'nowplaying', // /film/
      // 		component:	Nowplaying
      // 	},
      // 	{
      // 		path: 'comingsoon',
      // 		component:  Comingsoon
      // 	},
      // 	{
      // 		path: '',
      // 		redirect: '/film/nowplaying'
      // 	} //重定向 
      // ]
    },
    {
      path: '/list',
      component: List
    },
   
      {
      path: '/shoppingcar',
      component: Shoppingcar
    },
    //    {
    //   name:"detail",
    //   path: '/detail', // 固定路由 /detail
    //   component: Detail
    // },
     {
      name:"detail",
      path: '/detail/:id', //动态路由 /detail/1111
      component: Detail
    },
    {
      path: '/info',
      // name: 'HelloWorld',
      component: Info
    },
    {
      path: '*',
      redirect: '/index'
    } //重定向
   ]
})

/*
router.get("/")
router.get("/film")
router.get

 */
//全局的路由
router.beforeEach((to, from, next) => {
  // ...
  next();
})

export default router;
