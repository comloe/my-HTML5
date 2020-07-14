import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//测试代码
import Header from '../components/mintui/Header.vue'
import Button from '../components/mintui/Button.vue'
import Field from '../components/mintui/Field.vue'
import Checklist from '../components/mintui/Checklist.vue'
import Radio from '../components/mintui/Radio.vue'
import Switch from '../components/mintui/Switch.vue'
import Cell from '../components/mintui/Cell.vue'
import Navbar from '../components/mintui/Navbar.vue'
import Sweipe from '../components/mintui/Sweipe.vue'
import Lazy from '../components/mintui/Lazy.vue'
import Tabbar from '../components/mintui/Tabbar.vue'
import Style from '../components/mintui/Style.vue'
import Infinite from '../components/mintui/Infinite.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/details/:lid',
    component:()=>import((/* webpackChunkName: "register" */ '../views/Article.vue')),
    props:true
  },
  {
    path:"/register",
    component:()=>import((/* webpackChunkName: "register" */ '../views/Register.vue'))
  },
  {
    path:"/zhihu",
    component:()=>import((/* webpackChunkName: "register" */ '../views/Zhihu.vue'))
  },
  {
    path:"/login",
    component:()=>import((/* webpackChunkName: "register" */ '../views/Login.vue'))
  },
  {
    path:"/profile",
    component:()=>import((/* webpackChunkName: "register" */ '../views/profile.vue'))
  },
  {
    path:'/field',
    component:Field
  },
  {
    path:"/button",
    component:Button
  },
  {
    path:"/checklist",
    component:Checklist
  },
  {
    path:"/radio",
    component:Radio
  },
  {
    path:"/switch",
    component:Switch
  },
  {
    path:"/cell",
    component:Cell
  },
  {
    path:"/navbar",
    component:Navbar
  },{
    path:"/swipe",
    component:Sweipe
  },
  {
    path:"/lazy",
    component:Lazy
  },
  {
    path:"/tabbar",
    component:Tabbar
  },
  {
    path:"/style",
    component:Style
  },
  {
    path:"/infinite",
    component:Infinite
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/header',
    component:Header
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
