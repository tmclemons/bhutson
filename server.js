var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 1337);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'build')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port' + app.get('port'));
});
