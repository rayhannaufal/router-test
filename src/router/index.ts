import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BerandaView from '../views/BerandaView.vue'
import KelasSaya from '../views/KelasSaya.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: BerandaView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: HomeView
  },
  {
    path: '/my-class',
    name: 'my class',
    component: KelasSaya
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
