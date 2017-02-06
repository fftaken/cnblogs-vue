<template>
    <div>
        <div id="blogContent" class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <div v-html="blogContent">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
    export default {
        computed:{
            ...mapState({
                blogContent:state=>state.blog.item
            })
        },
        methods:{
            ...mapActions(['getBlog'])
        },
        created(){
            this.getBlog()
        },
        mouted:function(){
            let that=this
            
            $('#blogContent').height(window.innerHeight)
            mui('#blogContent').scroll()
        }
    }
</script>