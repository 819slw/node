const http = require('http');
const queryString = require('querystring');
const url = require('url');
http.createServer((req,res)=>{
    if(req.url === '/favicon.ico' || req.url ==='/') return;
    // 方案2： queryString node自带的方法
    let str = req.url.split('?')[1];
    var obj = queryString.parse(str);
    // 方案3： 使用node 自带的url
    let obj1 = url.parse(req.url,true); // 这里不设置true的话 下面使用query会返回字符串 
    let obj2 = obj1.query;
    console.log(obj2);
    res.end('ok');
}).listen(8080);