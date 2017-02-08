<template>
    <div>
        <div id="blogContent" class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <h4>{{blog.title[0]._}}</h4>
                <span style="color: #999;font-size:15px;">
                    {{blog.author[0].name[0]}} {{publishTime}}
                </span>
                <div style="border-top:1px solid #e5e5e5;width:100%;margin:10px 0px;"></div>
                <div v-html="blog.blogContent">

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
import {mapState,mapActions} from 'vuex'
    export default {
        computed:{
            ...mapState({
                blog:state=>state.blog.item
            }),
            publishTime(){
                let timeStr=this.blog.published[0]
                timeStr=timeStr.split('+')[0]
                console.log(new Date(timeStr))
                return timeStr;
            }
        },
        methods:{
            ...mapActions(['getBlog']),
            return(){
                this.$router.go(-1)
            }
        },
        created(){
        },
        mounted:function(){
            let that=this
            $('#blogContent').height(window.innerHeight)
            mui('#blogContent').scroll()


            that.getBlog().then(res=>{
                that.$nextTick(function(){
                    $('.code_img_closed').remove()
                })
            })
        },
        deactivated(){
            this.$destroy()
        }
    }
</script>
<style lang="stylus">
#blogContent
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
.btn-return
    display block
    z-index 2
    color #999
    position fixed
    bottom 50px
    right 25px
    width 50px
    height 50px
    border-radius 25px
    text-align center
    line-height 50px
    background-color rgba(255,255,255,0.8)
</style>