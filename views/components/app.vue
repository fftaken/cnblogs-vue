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


.mui-card-header.mui-card-media 
    background-color #28b0b5

.mui-card-header.mui-card-media .mui-media-body 
    color #f2f2f2
.mui-card-content-inner 
    color #666
.mui-bar-tab .mui-tab-item 
    background-color #fff
.mui-card-header.mui-card-media .mui-media-body p 
    color #333

</style>