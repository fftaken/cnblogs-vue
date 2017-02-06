import { Post } from '../../api'
import { UPDATE_BLOG } from '../mutation_types'

const state = {
    item:''
}

const mutations = {
    [UPDATE_BLOG](state, data) {
        state.item=data
    }
}

const actions = {
    getBlog({commit, state,rootState}) {
        let queryData = {
            id:rootState.route.params.id,
        }
        return new Promise((resolve, reject) => {
            Post('getBlog', queryData).then(response => {
                commit(UPDATE_BLOG, response.body.string)
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