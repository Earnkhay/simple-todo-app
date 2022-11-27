import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import activeView from '@/views/active.vue'
import completedView from '@/views/completed.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/active',
    name: 'active',
    component: activeView
  },
  {
    path: '/completed',
    name: 'completed',
    component: completedView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
