import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import app from './components/app.vue'
import index from './components/index/index.vue'
import news from './components/news/index.vue'
import blogContent from './components/blog_content/index.vue'
import newsContent from './components/news_content/index.vue'
import personSearch from './components/person_search/index.vue'
import { sync } from 'vuex-router-sync'

Vue.use(Router)

const routes=[
    {
        path:'/index',component:index
    },
    {
        path:'/blogContent/:id',component:blogContent
    },
    {
        path:'/news',component:news
    },
    {
        path:'/newsContent/:id',component:newsContent
    },
    {
        path:'/personSearch',component:personSearch
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