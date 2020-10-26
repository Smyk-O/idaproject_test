import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lot/:id',
    name: 'Lot',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lot.vue'),
    children: [
      {
        path: 'specifications',
        component: () => import(/* webpackChunkName: "about" */ '../components/lot/specifications.vue'),
        alias: '/',
        props: true
      },
      {
        path: 'team',
        component: () => import(/* webpackChunkName: "about" */ '../components/lot/team.vue'),
        props: true
      },
      {
        path: 'rent',
        component: () => import(/* webpackChunkName: "about" */ '../components/lot/terms.vue'),
        props: true
      }
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
