let xml=require('xml2js');

exports.ParseXml=(res,body)=>{
    xml.parseString(body,(err,result)=>{
        res.send(result);
    });
}