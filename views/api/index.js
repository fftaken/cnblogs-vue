import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const ApiResource=Vue.resource('/api/{controller}')

export function Post(controller,data){
    return ApiResource.save({controller:controller},data)
}
export function Get(controller,data){
    return ApiResource.get({controller:controller},data)
}