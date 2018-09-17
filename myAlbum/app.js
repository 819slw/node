const express = require('express');
const router = require('./controller/router');
const app = express();
app.listen(8080);
// 设置模板引擎
app.set('view engine', 'ejs');
// 加载静态资源
app.use(express.static('./pulic'));

// 发送请求
app.get('/', router.shouwIndex);

//dsada