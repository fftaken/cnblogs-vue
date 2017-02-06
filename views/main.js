import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import app from './components/app.vue'
import index from './components/index/index.vue'

Vue.use(Router)

const routes=[
    {
        path:'/index',component:index
    },
    {
        path:'*',redirect:'/index'
    }
]

let router=new Router({
    routes
})

new Vue({
    el:'#app',
    store,
    router,
    render:h=>h(app)
})