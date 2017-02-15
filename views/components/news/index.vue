<template>
    <div>
        <div class="mui-content">
            <div style="position: relative;">
                <div id="blogPullrefresh" class="mui-scroll-wrapper">
                    <div class="mui-scroll">
                        <div>
                            <news v-for="news in newsList" :news="news">
                            </news>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>
<script>
    import news from './news.vue'
    import foot from '../foot/index.vue'
    import { mapState, mapActions } from 'vuex'
    export default {
        components:{
            news,
            foot
        },
        computed: {
            ...mapState({
                newsList: state=>state.news_list.list,
                newsHasMore: state=>state.news_list.hasMore
            })
        },
        methods: {
            ...mapActions([
                'getNewsList',
                'updateNews'
            ])
        },
        mounted: function () {
            let that = this
            $('.mui-content,.mui-scroll-wrapper').height(window.innerHeight-50);
            let blogPullrefresh=mui('#blogPullrefresh')
            blogPullrefresh.pullRefresh({
                up:{
                    height: 50, 
                    auto: true,
                    contentrefresh: '正在加载...',
                    contentnomore: '没有更多数据了',
					callback: function(){
                        that.getNewsList().then(res=>{
                            blogPullrefresh.pullRefresh().endPullupToRefresh(!that.newsHasMore);//参数为true表示没有更多了
                        })
                    }
                },
                down:{
                    height: 50, 
                    auto:false,
					callback: function(){
                        that.updateNews().then(res=>{
                            blogPullrefresh.pullRefresh().endPulldownToRefresh();//参数为true表示没有更多了
                            blogPullrefresh.pullRefresh().refresh(true);
                        })
                    }
                }
            })
        }
    }
</script>