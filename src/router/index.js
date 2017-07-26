import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = resolve => require(['../vue/index.vue'], resolve)
const login = resolve => require(['../vue/login.vue'], resolve)

const routes = [{
  path: '/index',
  name: 'index',
  component: index,
}, {
  path: '/',
  name: 'index',
  component: index,
}, {
  path: '/login',
  name: 'login',
  component: login,
}]

export default new Router({
  mode: 'history',
  routes,
})
