import Vue from 'vue'
import VueRouter from 'vue-router'
//mport Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
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
    path: '/application',
    name: 'Application',
    component: () => import('../views/Application.vue')
  },
  /*{
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },*/
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
