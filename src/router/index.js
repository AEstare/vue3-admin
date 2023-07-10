import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'

import Goods from '@/components/menus/Goods/Goods.vue'
import Orders from '@/components/menus/Orders.vue'
import Rights from '@/components/menus/Rights.vue'
import Settings from '@/components/menus/Settings.vue'
import Users from '@/components/menus/Users/Users.vue'
import NewUsers from '@/components/menus/Users/NewUsers.vue'

import MyUserInfo from '@/components/MyUser/MyUserInfo.vue'
import MyUserPwd from '@/components/MyUser/MyUserPwd.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login, meta: { title: '登陆' } },
  {
    path: '/home', component: Home, children: [
    ], meta: { title: '后台主页' },redirect: '/home/Goods',
    children: [
      { path: 'Goods', component: Goods },
      { path: 'Orders', component: Orders },
      { path: 'Rights', component: Rights },
      { path: 'Settings', component: Settings },
      { path: 'Users', component: Users },
      { path: 'NewUsers', component: NewUsers },
      { path: 'UserInfo', component: MyUserInfo },
      { path: 'UserPwd', component: MyUserPwd },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // 页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 未登陆不能进入后台主页
  const token = localStorage.getItem('token')
  if (to.path === '/login') return next()
  if (!token) {
    next('/login')
  } else {
    next()
  }
})
export default router