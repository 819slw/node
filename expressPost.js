const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.listen(8080);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: false
}))
app.get('/', (req, res) => { //这个是用来 获取用户信息的
  res.render('expressPost');
});


app.post('/', (req, res) => { //这个是用来 获取用户信息的
  res.send('提交完成');
  console.log(req.body);
});