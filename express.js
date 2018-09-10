const express = require('express');
const app = express();
app.listen(8080);
//渲染静态文件
// app.use(express.static('../static'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    n: 8,
    fruits: ['aaa', 'qqq', 'sss', 'www', 'xxx']
  })
})