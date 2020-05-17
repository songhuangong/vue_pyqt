import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import sub0 from '@/components/sub0.vue'

Vue.use(Router)

Router.prototype.goBack = function () {
　　this.isBack = true
　　window.history.go(-1)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/sub0',
      name:'sub0',
      component:sub0
    }
  ]
})
