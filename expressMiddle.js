const express = require('express');
const app = express();
app.listen(8080);

app.get('/admin/login', (req, res) => {
  res.send('我是管理员');
});

app.get('/:username/:password', (req, res) => {
  res.send('我是普通用户');
});