import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import home1 from '../views/home1.vue'
import home2 from '../views/home2.vue'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "Home",
      component: Home,
      children: [{
        path: '/',
        component: home1
      },
      {
        path: 'home1',       
        component: home1
      },
      {
        path: 'home2',
        component: home2
      }
    ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               