const http = require('http');
const server = http.createServer(function(req,res){
    //req  前端向后端发起请求 
    //res  后台给前端的相应
    if(req.url == '/favicon.ico'){
        return;
    }
    console.log('有人来了，好开心');
    res.writeHeader('200',{'content-type':'text/html;charset=utf-8'});
    res.write('有人来了，好开心');
    res.end();
}).listen(8080);



// 在输入文件名称时  输入一半  可以按住tab键 进行补充