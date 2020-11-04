import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vente from '../views/Vente.vue'
import Stock from '../views/Stock.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/store',
    name: 'Stock',
    component: Stock
  },
  {
    path: '/ventes',
    name: 'Vente',
    component: Vente
  },

  
]

const router = new VueRouter({
  routes,
  
})

export default router
