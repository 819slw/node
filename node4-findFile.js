const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    //拿到当前所有文件夹下所有的文件夹
    //拿到当前所有文件下的所有文件
    let aryDir = [];
    fs.readdir('./',(err,files)=>{
        console.log(files);
        //捉个判断每个文件是否为文件夹，如果是就放入数组；
        (function Iterator(i){
            if(i >= files.length){
                console.log(aryDir);
                return
            }
            fs.stat('./'+files[i],(err,stats)=>{
                if(stats.isDirectory()){
                    aryDir.push(files[i])
                }
            })
            Iterator(i++);
        })(0);
    })
}).listen('8080');