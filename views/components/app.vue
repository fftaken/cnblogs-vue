<template>
    <div id="app">
        <keep-alive>
            <router-view>

            </router-view>
        </keep-alive>
    </div>
</template>
<script>
    export default{
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
.mui-bar-tab .mui-tab-item.mui-active 
    color #f76546 !important

</style>