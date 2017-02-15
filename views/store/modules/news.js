import { Post } from '../../api'
import { UPDATE_NEWS,ASSIGN_NEWS } from '../mutation_types'

const state = {
    item:{}
}

const mutations = {
    [UPDATE_NEWS](state, data) {
        state.item=data
    },
    [ASSIGN_NEWS](state,data){
        state.item=Object.assign({},state.item,data)
    }
}

const actions = {
    getNewsContent({commit, state,rootState}) {
        let queryData = { 
            id:rootState.route.params.id,
        }
        return new Promise((resolve, reject) => {
            Post('getNewsContent', queryData).then(response => {
                commit(ASSIGN_NEWS, {
                    newsContent:response.body.NewsBody.Content[0]
                })
                resolve()
            })
        })
    },
    getNewsComment({commit, state, rootState}){
        let queryData = {
            newsId:rootState.route.params.id,
        }
        return new Promise((resolve, reject) => {
            Post('getNewsComment', queryData).then(response => {
                commit(ASSIGN_NEWS, {
                    commentList:response.body.feed.entry
                })
                resolve()
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
}