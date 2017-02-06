let express=require('express');
let news=require('./api/news');
let index=require('./routes/index');

let router=express.Router();

router.get('/',index.index)
router.all('/api/getRecent',news.getRecent);

module.exports=router;