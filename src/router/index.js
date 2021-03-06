import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/:id',
    name: 'Detail',
    props : true,
    component: Detail,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
