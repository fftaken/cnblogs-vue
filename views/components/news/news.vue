<template>
    <div>
        <div class="mui-card">
            <div class="mui-card-header mui-card-media">
                <img :src="userHeader">
                <div class="mui-media-body">
                    {{news.title[0]._}}
                    <p>{{news.sourceName[0]}} {{publishTime}}</p>
                </div>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    {{news.summary[0]._}}
                </div>
            </div>
            <div class="mui-card-footer">
                <span>
                    <!--阅读量-->
                    <span class="mui-icon mui-icon-eye" style="color: #999;"></span>
                    <span>{{news.views[0]}}</span>

                    <!--点赞量-->
                    <span class="mui-icon-extra mui-icon-extra-heart-filled" style="font-size: 19px;color: #999;margin-left: 10px;"></span>
                    <span>{{news.diggs[0]}}</span>

                    <!--评论数-->
                    <span class="mui-icon mui-icon-chat" style="font-size: 18px;color: #999;margin-left: 10px;"></span>
                    <span>{{news.comments[0]}}</span>
                </span>
                <a class="mui-card-link" @tap="showNews">查看全文</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['news'],
        computed:{
            userHeader(){
                return 'http://'+this.news.topicIcon[0].split('///')[1]
            },
            publishTime(){
                let timeStr=this.news.published[0]
                timeStr=timeStr.split('+')[0]
                return timeStr;
            }
        },
        methods:{
            
            showNews(){
                this.$store.commit('UPDATE_NEWS',this.news)
                this.$router.push('/newsContent/'+this.news.id[0])
            }
        },
        mounted: function () {
            
        }
    }
</script>
