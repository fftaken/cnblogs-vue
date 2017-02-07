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
                console.log(new Date(timeStr))
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