let request=require('request');
let responseFun=require('./response');

exports.getNewsList=(req,res,next)=>{
    let page=req.body.page;
    let rows=req.body.rows;

    request.get({
        uri:'http://wcf.open.cnblogs.com/news/recent/paged/'+page+'/'+rows,
        referer:'http://www.cnblogs.com/'
    },(error,response,body)=>{
        if (error) {
            res.send(error);
        }
        else {
            responseFun.ParseXml(res,body);
        }
    })
}

exports.getNewsContent=(req,res,next)=>{
    let id=req.body.id;

    request.get('http://wcf.open.cnblogs.com/news/item/'+id,(error,response,body)=>{
        if (error) {
            res.send(error);
        }
        else {
            responseFun.ParseXml(res,body);
        }
    })
}

exports.getNewsComment=(req,res,next)=>{
    let newsId=req.body.newsId;

    request.get('http://wcf.open.cnblogs.com/news/item/'+newsId+'/comments/1/1000000000',(error,response,body)=>{
        if (error) {
            res.send(error);
        }
        else {
            responseFun.ParseXml(res,body);
        }
    })
}

