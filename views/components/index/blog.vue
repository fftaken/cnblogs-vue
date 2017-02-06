<template>
    <div>
        <div class="mui-card">
            <div class="mui-card-header mui-card-media">
                <img :src="userHeader" v-if='hasHeader'>
                <div class="mui-media-body">
                    {{blog.title[0]._}}
                    <p>{{blog.author[0].name[0]}}</p>
                </div>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    {{blog.summary[0]._}}
                </div>
            </div>
            <div class="mui-card-footer">
                发表于 {{blog.published[0]}}
                <a class="mui-card-link" @tap="showBlog">查看全文</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['blog'],
        computed:{
            hasHeader(){
                return this.blog.author[0].avatar[0]===''?false:true
            },
            userHeader(){
                return '/image?imgUrl='+this.blog.author[0].avatar[0]
            }
        },
        methods:{
            showBlog(){
                this.$router.push('/blog/'+this.blog.id[0])
            }
        },
        mounted: function () {
            
        }
    }
</script>