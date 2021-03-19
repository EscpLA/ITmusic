import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    children: [
       
    ]
  },
  {
    path: '/PersonInfo',
    name: 'PersonInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PersonInfo.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
