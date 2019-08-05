import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Songs from '@/views/Songs'
import CreateSong from '@/views/CreateSong'
import ViewSong from '@/views/ViewSong'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'Songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'Song',
      component: ViewSong
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
