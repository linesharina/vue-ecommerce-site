import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import AddProduct from './views/AddProduct'
import ProductsList from './views/ProductsList'
import SingleProduct from './views/SingleProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsList
    },
    {
      path: '/product/:slug',
      name: 'product',
      component: SingleProduct
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: AddProduct
    }
  ]
})
