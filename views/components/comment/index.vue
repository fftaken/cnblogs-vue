<template>
    <div>
        <div class="title" style="font-size: 21px;margin-bottom: 10px;">
            评论({{commentCount}})
        </div>
        <ul class="mui-table-view">
            <div style="text-align: center;height: 30px;line-height: 30px;" v-if="!hasComment">
                目前还没有评论...
            </div>
            <li class="mui-table-view-cell mui-media" v-for="comment in commentList">
                <div class="mui-table">
                    <div class="mui-table-cell mui-col-xs-10">
                        <span class="mui-ellipsis">{{comment.author[0].name[0]}}</span>
                        <p class="mui-h6" v-html="comment.content[0]._"></p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'comment',
        props:['commentList'],
        computed:{
            hasComment(){
                return this.commentList&&this.commentList.length>0
            },
            commentCount(){
                return this.commentList?this.commentList.length:0
            }
        }
    }
</script>