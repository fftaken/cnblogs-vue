import Vue from 'vue'
import Vuex from 'vuex'
import {state,mutations} from './mutations'
import * as actions from './actions'
import blog from './modules/blog'
import blog_list from './modules/blog_list'
import news_list from './modules/news_list'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules:{
        blog,
        blog_list,
        news_list
    }
})
