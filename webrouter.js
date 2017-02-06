let express=require('express');
let blog=require('./api/blog');
let index=require('./routes/index');

let router=express.Router();

router.get('/',index.index)
router.all('/api/getRecent',blog.getRecent);
router.all('/api/getBlog',blog.getBlog);

module.exports=router;