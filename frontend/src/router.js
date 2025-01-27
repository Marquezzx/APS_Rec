import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Landing from '@/views/Landing'
import Result from '@/views/Result'
import SearchError from '@/views/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main,
    },
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
    },
    {
      path: '/error',
      name: 'error',
      component: SearchError,
    }

  ]
})
