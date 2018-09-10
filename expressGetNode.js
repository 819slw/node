const express = require('express');
const app = express();
app.listen(8080);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('expressGet');
  console.log(req.query.name);

  //   // res.render(res);
  //   res.render(req.query);
  //   // console.log(res.query);
});