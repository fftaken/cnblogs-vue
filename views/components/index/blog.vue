<template>
    <div>
        <div class="mui-card">
            <div class="mui-card-header mui-card-media">
                <img :src="userHeader" v-if='hasHeader'>
                <div class="mui-media-body">
                    {{blog.title[0]._}}
                    <p>{{blog.author[0].name[0]}} {{publishTime}}</p>
                </div>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    {{blog.summary[0]._}}
                </div>
            </div>
            <div class="mui-card-footer">
                <span>
                    <!--阅读量-->
                    <span class="mui-icon mui-icon-eye" style="color: #999;"></span>
                    <span>{{blog.views[0]}}</span>

                    <!--点赞量-->
                    <span class="mui-icon-extra mui-icon-extra-heart-filled" style="font-size: 19px;color: #999;margin-left: 10px;"></span>
                    <span>{{blog.diggs[0]}}</span>

                    <!--评论数-->
                    <span class="mui-icon mui-icon-chat" style="font-size: 18px;color: #999;margin-left: 10px;"></span>
                    <span>{{blog.comments[0]}}</span>
                </span>
                <a class="mui-card-link" @tap="showBlog">查看全文</a>
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
    export default {
        props: ['blog'],
        computed:{
            hasHeader(){
                return this.blog.author[0].avatar[0]===''?false:true
            },
            userHeader(){
                return '/image?imgUrl='+this.blog.author[0].avatar[0]
            },
            publishTime(){
                let timeStr=this.blog.published[0]
                timeStr=timeStr.split('+')[0]
                return timeStr;
            }
        },
        methods:{
            
            showBlog(){
                this.$store.commit('UPDATE_BLOG',this.blog)
                this.$router.push('/blog/'+this.blog.id[0])
            }
        },
        mounted: function () {
            
        }
    }
</script>