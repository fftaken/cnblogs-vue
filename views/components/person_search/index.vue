<template>
    <div>
        <div class="mui-content">
            <div style="position: relative;">
                <div id="blogPullrefresh" class="mui-scroll-wrapper">
                    <div class="mui-scroll">
                        <div>
                            开发中！
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>
<script>
    import foot from '../foot/index.vue'
    import { mapState, mapActions } from 'vuex'
    export default {
        components: {
            foot
        },
        mounted: function () {
            let that = this
            $('.mui-content,.mui-scroll-wrapper').height(window.innerHeight-50);
        }
    }

</script>