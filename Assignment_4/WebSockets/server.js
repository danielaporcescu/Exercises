var express = require('express');
var app = express();
app.use(express.static(__dirname + '/src')); //__dir and not _dir
var port = 8003; 
app.listen(port);
console.log('server on' + port);