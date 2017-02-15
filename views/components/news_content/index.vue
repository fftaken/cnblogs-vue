<template>
    <div>
        <div id="newsContent" class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <h4>{{newsContent.title[0]._}}</h4>
                <span style="color: #666;font-size:15px;">
                    {{newsContent.sourceName[0]}}  {{publishTime}}
                </span>
                <div style="border-top:1px solid #e5e5e5;width:100%;margin:10px 0px;"></div>
                <div v-show="loading" style="text-align:center;font-size: 15px;line-height: 24px;font-weight:700;color: #777;">
                    <div class="mui-pull-loading mui-icon mui-spinner mui-visibility"></div>
                    正在加载...
                </div>
                <div v-html="newsContent.newsContent">

                </div>
                <div v-show="!loading">
                    <comment :commentList="newsContent.commentList"></comment>
                </div>
            </div>
        </div>
        <a href="javascript:history.go(-1)" class="btn-return">
            <div class="mui-icon mui-icon-undo">

            </div>
        </a>
    </div>
</template>
<script>
import comment from '../comment/index.vue'
import {mapState,mapActions} from 'vuex'
    export default {
        components:{
            comment
        },
        data(){
            return {
                loading:true
            }
        },
        computed:{
            ...mapState({
                newsContent:state=>state.news.item
            }),
            publishTime(){
                let timeStr=this.newsContent.published[0]
                timeStr=timeStr.split('+')[0]
                return timeStr;
            }
        },
        methods:{
            ...mapActions(['getNewsContent','getNewsComment']),
            return(){
                this.$router.go(-1)
            }
        },
        created(){
        },
        mounted:function(){
            let that=this
            $('#newsContent').height(window.innerHeight)
            mui('#newsContent').scroll()

            that.getNewsContent().then(res=>{
                that.$nextTick(function(){
                    $('.code_img_closed').remove()
                    that.loading=false
                })
                that.getNewsComment()
            })
        },
        deactivated(){
            this.$destroy()
        }
    }
</script>
<style lang="stylus">
#newsContent
    background-color #fff
    .mui-scroll 
        padding 10px 10px 0px 10px
    pre
        white-space pre-wrap
        word-space pre-wrap
        background-color #f5f5f5
    img
        width 100%
    h4
        line-height 20px
    .mui-table-view
        &:after
            height 0px
.btn-return
    display block
    z-index 2
    color #f76546
    position fixed
    bottom 70px
    right 20px
    width 50px
    height 50px
    border-radius 25px
    text-align center
    line-height 50px
    border 1px solid #f76546
    background-color rgba(255,255,255,0.8)
    .mui-icon
        font-weight 800 !important
</style>