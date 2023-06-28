import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home', component: Home, children: [
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router