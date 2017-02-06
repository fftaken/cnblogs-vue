<template>
    <div>
        <div class="mui-content">
            <div style="position: relative;">
                <div id="newsPullrefresh" class="mui-scroll-wrapper">
                    <div class="mui-scroll">
                        <div>
                            <news v-for="news in newsList" :news="news">
                            </news>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import news from './news.vue'
    import { mapState, mapActions } from 'vuex'
    export default {
        components:{
            news
        },
        computed: {
            ...mapState({
                newsList: state=>state.news_list.list,
                newsHasMore: state=>state.news_list.hasMore
            })
        },
        methods: {
            ...mapActions([
                'getNews',
                'updateNews'
            ])
        },
        mounted: function () {
            let that = this
            $('.mui-content,.mui-scroll-wrapper').height(window.innerHeight);

            let newsPullrefresh=mui('#newsPullrefresh')
            newsPullrefresh.pullRefresh({
                up:{
                    height: 50, 
                    auto: true,
                    contentrefresh: '正在加载...',
                    contentnomore: '没有更多数据了',
					callback: function(){
                        that.getNews().then(res=>{
                            newsPullrefresh.pullRefresh().endPullupToRefresh(!that.newsHasMore);//参数为true表示没有更多了
                        })
                    }
                },
                down:{
                    height: 50, 
                    auto:false,
					callback: function(){
                        that.updateNews().then(res=>{
                            newsPullrefresh.pullRefresh().endPulldownToRefresh();//参数为true表示没有更多了
                            newsPullrefresh.pullRefresh().refresh(true);
                        })
                    }
                }
            })
        }
    }
</script>
<style lang="stylus">
/*.mui-scroll
    padding 10px*/
    
</style>