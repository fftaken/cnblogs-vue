let express=require('express');
let blog=require('./api/blog');
let news=require('./api/news');
let index=require('./routes/index');

let router=express.Router();

router.get('/',index.index)
router.all('/api/getRecent',blog.getRecent);
router.all('/api/getBlog',blog.getBlog);
router.all('/api/getBlogComment',blog.getBlogComment);
router.all('/api/getNewsList',news.getNewsList);
router.all('/api/getNewsContent',news.getNewsContent);
router.all('/api/getNewsComment',news.getNewsComment);

module.exports=router;