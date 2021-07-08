import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home/Home.vue')
const Me = () => import('@/views/Me/Me.vue')
const Photo = () => import('@/views/Photo/Photo.vue')
const Project = () => import('@/views/Project/Project.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/photo',
    component: Photo,
  },
  {
    path: '/me',
    component: Me,
  },
  {
    path: '/project',
    component: Project,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
