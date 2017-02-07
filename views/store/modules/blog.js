import { Post } from '../../api'
import { UPDATE_BLOG,ASSIGN_BLOG } from '../mutation_types'

const state = {
    item:{}
}

const mutations = {
    [UPDATE_BLOG](state, data) {
        state.item=data
    },
    [ASSIGN_BLOG](state,data){
        state.item=Object.assign({},state.item,data)
    }
}

const actions = {
    getBlog({commit, state,rootState}) {
        let queryData = {
            id:rootState.route.params.id,
        }
        return new Promise((resolve, reject) => {
            Post('getBlog', queryData).then(response => {
                commit(ASSIGN_BLOG, {
                    blogContent:response.body.string
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