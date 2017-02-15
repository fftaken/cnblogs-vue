<template>
    <div>
        <div class="mui-bar mui-bar-tab">
			<a :class="blogClass" @tap="redirect('index')">
				<span class="mui-icon-extra mui-icon-extra-dictionary"></span>
				<span class="mui-tab-label">博客</span>
			</a>
			<a :class="newsClass" @tap="redirect('news')">
				<span class="mui-icon-extra mui-icon-extra-new"></span>
				<span class="mui-tab-label">新闻</span>
			</a>
			<a :class="chatClass" @tap="redirect('personSearch')">
				<span class="mui-icon-extra mui-icon-extra-addpeople"></span>
				<span class="mui-tab-label">查找</span>
			</a>
		</div>
    </div>
</template>
<script>
    export default {
        name:'foot',
        computed: {
            blogClass(){
                return 'mui-tab-item'+(this.$route.path=='/index'?' mui-active':'')
            },
            newsClass(){
                return 'mui-tab-item'+(this.$route.path=='/news'?' mui-active':'')
            },
            chatClass(){
                return 'mui-tab-item'+(this.$route.path=='/personSearch'?' mui-active':'')
            }
        },
        methods:{
            redirect(url){
                this.$router.push(url)
            }
        }
    }
</script>