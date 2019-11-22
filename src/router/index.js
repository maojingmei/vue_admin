import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
import User from '@/views/user'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', component: () => import('@/views/login/index'), hidden: true},
    {
      path: '/',
      component: Layout,
      redirect:'/user',
      alwaysShow: true,
      hidden: true,
      children: [
        {
          path: 'user',
          component: User,
          name: 'User'
        }
      ]
    }
  ]
})
