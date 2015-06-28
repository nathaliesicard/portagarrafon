
var koa = require('koa');
var app = koa();
var staticMw = require('koa-static');



app.use(staticMw('public'));



var port = process.env.PORT || 3000;

app.listen(port);

console.log('Listening port %s', port);
