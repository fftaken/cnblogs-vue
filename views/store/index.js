import Vue from 'vue'
import Vuex from 'vuex'
import {state,mutations} from './mutations'
import * as actions from './actions'
import news_list from './modules/news_list'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules:{
        news_list
    }
})
