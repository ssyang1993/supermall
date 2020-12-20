import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
// const home = () => import('views/sp/sp')
const Sp = () => import('views/sp/Sp')
const Lei = () => import('views/lei/Lei')
const My= () => import('views/my/My')
const Car = () => import('views/car/Car')
const Home = () => import('views/home/Home')

//1.安装插件
Vue.use(VueRouter)

//抽离
const routes = [
  {//默认展示页面
    path: '',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/my',
    component: My
  }
  ,
  {
    path: '/sp',
    component: Sp
  }
  ,
  {
    path: '/lei',
    component: Lei
  }
  ,
  {
    path: '/car',
    component: Car
  }
]
//2.创建路由对象
const router = new VueRouter({
  routes,
  //模式
  mode: 'history'
})

//3.导出
export default router