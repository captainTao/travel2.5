import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/City.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ],
  // 系统的scroll锚点方法
  // https://segmentfault.com/q/1010000007888351
  // scrollBehavior (to) {
  //     if (to.hash) {
  //       return {
  //         selector: to.hash,
  //         offset: {x: 0, y:0}//这儿需要问一下、
  //       }
  //     }
  //   }
  scrollBehavior () {
      return{x:0,y:0}
    }
})
