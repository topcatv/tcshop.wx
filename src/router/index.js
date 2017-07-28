import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = resolve => require(['../vue/index.vue'], resolve)
const login = resolve => require(['../vue/login.vue'], resolve)
const category = resolve => require(['../vue/category.vue'], resolve)
const detail = resolve => require(['../vue/detail.vue'], resolve)

const routes = [{
  path: '/index',
  name: 'index',
  component: index,
}, {
  path: '/',
  name: 'default',
  component: index,
}, {
  path: '/login',
  name: 'login',
  component: login,
}, {
  path: '/category',
  name: 'category',
  component: category,
}, {
  path: '/detail/:id',
  name: 'detail',
  component: detail,
}]

export default new Router({
  mode: 'history',
  routes,
})
