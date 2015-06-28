
var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'Bienvenidos a la tienda de porta garrafones!!';
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Listening port %s', port);
