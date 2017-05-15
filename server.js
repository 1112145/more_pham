var express = require('express');
var path = require('path');
var db = require('./database/db.js');

var app = express();

app.set('port', (process.env.PORT || 8000));

var PATH_CLIENT_FOLDER = path.resolve(__dirname, './client/');
app.use(express.static(path.resolve(PATH_CLIENT_FOLDER, 'dist')));

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.sendFile(PATH_CLIENT_FOLDER + '/dist/index.html');
});

app.get('/foodlist', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(db.getFoodList()));
});


var http = app.listen(app.get('port'), function (req, res) {
    console.log('Server started at port: ' + 8000);
});