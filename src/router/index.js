import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Sort = () => import('../views/sort/Sort')
const My = () => import('../views/my/My')
const Detail = () => import('../views/detail/Detail')

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/sort',
    component:Sort
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/my',
    component:My
  },
  {
    path: '/detail/:iid',
    component:Detail
  }
]
const router = new VueRouter({
  routes
})

export default router
