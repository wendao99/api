const express = require('express');

const app = express();

const htmlRouter = require('./html/htmlRouter');

app.use('/html',htmlRouter);


app.listen(4000, () => {
  console.log('启动成功');
})