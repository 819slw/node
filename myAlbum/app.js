const express = require('express');
const router = require('./controller');
const app = express();
app.listen(8081);
// 设置模板引擎
app.set('view engine', 'ejs');
// 加载静态资源
app.use(express.static('./public'));

// 发送请求  显示首页
app.get('/', router.shouwIndex);

// 发送请求   显示二级页面
app.get('/:showImg', router.showImgPage);