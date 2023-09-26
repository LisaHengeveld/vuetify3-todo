import { createRouter, createWebHashHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'
import goTo from 'vuetify/lib/services/goto'

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: TodoView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
  document.title = `${ process.env.VUE_APP_TITLE } - ${ to.name }`
})

router.afterEach((to, from) => {
  window.scrollTo({ top: 0, left: 0})
})

export default router
