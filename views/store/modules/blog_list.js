import { Post } from '../../api'
import { APPEND_BLOG_LIST, UPDATE_BLOG_LIST } from '../mutation_types'

const state = {
    page: 1,
    rows: 10,
    list: [],
    hasMore: true
}

const mutations = {
    [APPEND_BLOG_LIST](state, data) {
        if (data.length < 10) {
            state.hasMore = false
        }
        state.page++
        state.list.push(...data)
    },
    [UPDATE_BLOG_LIST](state, data) {
        state.hasMore = true
        if (data.length < 10) {
            state.hasMore = false
        }
        state.page = 1
        state.list = data
    }
}

const actions = {
    getBlogs({commit, state}) {
        let queryData = {
            page: state.page,
            rows: state.rows
        }
        return new Promise((resolve, reject) => {
            Post('getRecent', queryData).then(response => {
                commit(APPEND_BLOG_LIST, response.body.feed.entry)
                resolve()
            })
        })
    },
    updateBlogs({commit, state}) {
        let queryData = {
            page: 1,
            rows: state.rows
        }
        return new Promise((resolve, reject) => {
            Post('getRecent', queryData).then(response => {
                commit(UPDATE_BLOG_LIST, response.body.feed.entry)
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