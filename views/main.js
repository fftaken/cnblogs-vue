import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import app from './components/app.vue'
import index from './components/index/index.vue'
import blog from './components/blog/index.vue'
import { sync } from 'vuex-router-sync'

Vue.use(Router)

const routes=[
    {
        path:'/index',component:index
    },
    {
        path:'/blog/:id',component:blog
    },
    {
        path:'*',redirect:'/index'
    }
]

let router=new Router({
    routes
})

sync(store, router);

new Vue({
    el:'#app',
    store,
    router,
    render:h=>h(app)
})