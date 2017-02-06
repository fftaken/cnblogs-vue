<template>
    <div>
        <div class="mui-card">
            <div class="mui-card-header mui-card-media">
                <img :src="news.author[0].avatar[0]">
                <div class="mui-media-body">
                    {{news.title[0]._}}
                    <p>{{news.author[0].name[0]}}</p>
                </div>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    {{news.summary[0]._}}
                </div>
            </div>
            <div class="mui-card-footer">
                发表于 {{news.published[0]}}
                <a class="mui-card-link">查看全文</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['news'],
        mounted: function () {
            console.log(this.news);
        }
    }
</script>
<style lang="stylus">
.news
    display block
    height 100px
    width 100%
    border 1px solid #333
    margin-bottom 10px

</style>