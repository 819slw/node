const express = require('express');
const router = require('./controller');
const app = express();
app.listen(8081);
// 设置模板引擎
app.set('view engine', 'ejs');
// 加载静态资源
app.use(express.static('./public'));
app.use(express.static('./uploads'));

// 发送请求  显示首页
app.get('/', router.shouwIndex);

// // 发送请求   显示二级页面   上传图片
app.get('/uploadsImg', router.uploadsImg);

// 发送请求   显示二级页面
app.get('/:showImg', router.showImgPage);


// post请求 处理上传来的图片
app.post('/doupload', router.doupload)



//404页面写在最底下
app.use(function (req, res) {
  res.render('404');
})