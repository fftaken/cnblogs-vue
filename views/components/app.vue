<template>
    <div id="app">
        <router-view>

        </router-view>
        <!--<nav_right></nav_right>-->
    </div>
</template>
<script>
import nav_right from './nav_right/index.vue'
    export default{
        components:{
            nav_right
        },
        data(){
            return {
            }
        }
    }
</script>
<style lang="stylus">
html,body
    height 100%
    width 100%
    margin 0px
    padding 0px
    overflow hidden
</style>