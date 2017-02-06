let request=require('request');
let responseFun=require('./response');

exports.getRecent=(req,res,next)=>{
    let page=req.body.page;
    let rows=req.body.rows;

    request.get('http://wcf.open.cnblogs.com/blog/sitehome/paged/'+page+'/'+rows,(error,response,body)=>{
        if (error) {
            res.send(error);
        }
        else {
            responseFun.ParseXml(res,body);
        }
    })
}

exports.getBlog=(req,res,next)=>{
    let id=req.body.id;

    request.get('http://wcf.open.cnblogs.com/blog/post/body/'+id,(error,response,body)=>{
        if (error) {
            res.send(error);
        }
        else {
            responseFun.ParseXml(res,body);
        }
    })
}

