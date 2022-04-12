import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Explore from '../views/Explore.vue'
import Feed from '../views/Feed.vue'
import Alert from '../views/Alert.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/explore',
    name: 'explore',
    component: Explore
  },
  {
    path: '/feed',
    name: 'feed',
    component: Feed
  },
  {
    path: '/alert',
    name: 'Alert',
    component: Alert
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
